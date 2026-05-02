import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Upload, X, Leaf, ArrowLeft, Cpu, CheckCircle2, AlertTriangle,
  Droplets, Thermometer, Activity, RotateCcw, Share2, Download,
  Info, ChevronRight
} from 'lucide-react'

const getMockResult = () => ({
  plant: 'Lettuce',
  species: 'Lactuca sativa',
  confidence: 92,
  status: 'warning',
  statusLabel: 'Attention Required',
  diagnosis: 'This lettuce plant has been identified with moderate phosphorus deficiency combined with early-stage dehydration stress. The outer leaf margins show characteristic purplish discoloration and slight curl — classic indicators of phosphorus uptake failure. Inner leaves display wilting and loss of turgor pressure consistent with insufficient watering. Immediate intervention is recommended to prevent irreversible tissue damage.',
  conditions: [
    { label: 'Phosphorus Deficiency', severity: 'Moderate', color: '#f59e0b' },
    { label: 'Dehydration Stress', severity: 'Mild–Moderate', color: '#3b82f6' },
    { label: 'Tip Burn (Early)', severity: 'Mild', color: '#ef4444' },
  ],
  recommendations: [
    { icon: Droplets, text: 'Water immediately and maintain consistent soil moisture. Lettuce requires 1–1.5 inches of water per week — increase to daily watering in warm conditions.' },
    { icon: Thermometer, text: 'Apply a phosphorus-rich fertilizer (e.g. 10-52-10 starter fertilizer) at the base. Avoid high-nitrogen feeds which worsen phosphorus lockout.' },
    { icon: Activity, text: 'Check soil pH — phosphorus absorption is blocked below pH 6.0 or above 7.5. Adjust with lime (raise) or sulfur (lower) as needed.' },
  ],
  scannedAt: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
  scanId: 'PA-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
})

const STAGES = ['Uploading image…', 'Preprocessing…', 'Running neural network…', 'Generating diagnosis…']

export default function AnalyzePage() {
  const [image, setImage] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [stageIdx, setStageIdx] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const [result, setResult] = useState(null)
  const fileRef = useRef()

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      setImage({ src: e.target.result, name: file.name, size: (file.size / 1024).toFixed(1) + ' KB' })
      setPhase('idle')
    }
    reader.readAsDataURL(file)
  }

  const onDrop = useCallback((e) => {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }, [])

  const onDragOver = (e) => { e.preventDefault(); setDragOver(true) }
  const onDragLeave = () => setDragOver(false)

  const analyze = () => {
    if (!image) return
    setResult(getMockResult())
    setPhase('loading')
    setStageIdx(0)
    setTimeout(() => setStageIdx(1), 400)
    setTimeout(() => setStageIdx(2), 900)
    setTimeout(() => setStageIdx(3), 1400)
    setTimeout(() => setPhase('result'), 2000)
  }

  const reset = () => {
    setImage(null)
    setPhase('idle')
    setStageIdx(0)
    setResult(null)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm mb-8 hover:text-leaf-500 transition-colors"
          style={{ color: 'var(--text-secondary)' }}>
          <ArrowLeft size={15} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="section-tag mb-3 inline-block">Plant Diagnosis</span>
          <h1 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Analyze a <span className="text-gradient">plant</span>
          </h1>
          <p className="mt-3 text-base" style={{ color: 'var(--text-secondary)' }}>
            Upload a clear image of a plant leaf to receive an AI-powered health diagnosis.
          </p>
        </div>

        {phase === 'result' && result ? (
          <ResultView result={result} image={image} onReset={reset} />
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload zone */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>
                Plant Image
              </p>
              <div
                className={`input-drop rounded-3xl transition-all duration-200 ${dragOver ? 'dragover' : ''}`}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onClick={() => !image && fileRef.current.click()}
                style={{ cursor: image ? 'default' : 'pointer', minHeight: '320px', position: 'relative', overflow: 'hidden' }}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => handleFile(e.target.files[0])}
                />

                {image ? (
                  <div className="relative h-80">
                    <img src={image.src} alt="Plant" className="w-full h-full object-cover rounded-3xl" />
                    {/* Scan overlay if loading */}
                    {phase === 'loading' && (
                      <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)' }}>
                        <div className="scan-line" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                            style={{ background: 'rgba(45,158,45,0.9)' }}>
                            <Cpu size={28} className="text-white animate-pulse" />
                          </div>
                          <p className="text-white text-sm font-semibold">{STAGES[stageIdx]}</p>
                          <div className="flex gap-1 mt-3">
                            {STAGES.map((_, i) => (
                              <div key={i} className="h-1 rounded-full transition-all duration-300"
                                style={{
                                  width: i <= stageIdx ? '20px' : '6px',
                                  background: i <= stageIdx ? '#4ab84a' : 'rgba(255,255,255,0.3)'
                                }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Remove button */}
                    {phase !== 'loading' && (
                      <button
                        onClick={(e) => { e.stopPropagation(); reset() }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-105"
                        style={{ background: 'rgba(0,0,0,0.5)' }}
                      >
                        <X size={14} className="text-white" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-bounce-subtle"
                      style={{ background: 'rgba(45,158,45,0.1)' }}>
                      <Upload size={28} style={{ color: '#2d9e2d' }} />
                    </div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Drop your image here
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      or <span style={{ color: '#2d9e2d' }} className="font-medium">click to browse</span>
                    </p>
                    <p className="text-xs mt-3" style={{ color: 'var(--text-secondary)' }}>
                      PNG, JPG, WEBP · Up to 10MB
                    </p>
                  </div>
                )}
              </div>

              {/* File info */}
              {image && phase !== 'loading' && (
                <div className="mt-3 flex items-center justify-between text-xs px-1" style={{ color: 'var(--text-secondary)' }}>
                  <span className="truncate max-w-[180px]">{image.name}</span>
                  <span>{image.size}</span>
                </div>
              )}
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-5">
              {/* Info card */}
              <div className="glass-card rounded-2xl p-5">
                <div className="flex gap-3 items-start">
                  <Info size={16} style={{ color: '#2d9e2d' }} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Tips for best results
                    </p>
                    <ul className="text-xs space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                      {['Capture a single leaf in good lighting', 'Avoid blurry or low-resolution images', 'Include any visible spots or discoloration', 'Natural daylight works best'].map(t => (
                        <li key={t} className="flex items-start gap-1.5">
                          <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: '#2d9e2d' }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Supported plants */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Supported Plants (Beta)
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Lettuce', 'Tomato', 'Maize', 'Potato', 'Pepper', 'Wheat', 'Soybean', 'Apple'].map(p => (
                    <span key={p} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(45,158,45,0.08)', color: '#2d9e2d', border: '1px solid rgba(45,158,45,0.2)' }}>
                      {p}
                    </span>
                  ))}
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}>
                    +32 more
                  </span>
                </div>
              </div>

              {/* Analyze button */}
              <button
                onClick={analyze}
                disabled={!image || phase === 'loading'}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {phase === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Analyzing…
                  </>
                ) : (
                  <>
                    <Cpu size={18} />
                    {image ? 'Analyze Plant' : 'Upload an Image First'}
                  </>
                )}
              </button>

              {/* Stage progress when loading */}
              {phase === 'loading' && (
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>Analysis Progress</p>
                  <div className="space-y-2">
                    {STAGES.map((s, i) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${i < stageIdx ? 'bg-leaf-500' : i === stageIdx ? 'bg-leaf-400 animate-pulse' : ''}`}
                          style={i >= stageIdx ? { background: 'var(--border)' } : {}}>
                          {i < stageIdx && <CheckCircle2 size={10} className="text-white" />}
                        </div>
                        <span className={`text-xs ${i <= stageIdx ? 'font-medium' : ''}`}
                          style={{ color: i <= stageIdx ? '#2d9e2d' : 'var(--text-secondary)' }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ResultView({ result, image, onReset }) {
  const pct = result.confidence

  return (
    <div className="animate-on-load">
      {/* Top controls */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onReset} className="btn-outline text-sm py-2 px-4">
          <RotateCcw size={15} /> Analyze Another
        </button>
        <div className="flex gap-2">
          <button className="btn-outline text-sm py-2 px-4">
            <Share2 size={15} /> Share
          </button>
          <button className="btn-outline text-sm py-2 px-4">
            <Download size={15} /> Export PDF
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Image */}
        <div className="md:col-span-2">
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: '1px solid var(--border)' }}>
            <img src={image.src} alt="Analyzed plant" className="w-full object-cover" style={{ maxHeight: '280px' }} />
            <div className="p-4" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Scanned</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{result.scannedAt}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Scan ID</p>
                  <p className="text-sm font-mono font-bold" style={{ color: '#2d9e2d' }}>{result.scanId}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-3 space-y-4">
          {/* Plant & Status */}
          <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-leaf-500 flex items-center justify-center shadow-lg animate-pulse-green">
                <Leaf size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>Detected Plant</p>
                <p className="font-display font-700 text-xl" style={{ color: 'var(--text-primary)' }}>{result.plant}</p>
                <p className="text-xs italic" style={{ color: 'var(--text-secondary)' }}>{result.species}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>
                <AlertTriangle size={11} /> {result.statusLabel}
              </span>
            </div>
          </div>

          {/* Detected conditions */}
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>Detected Conditions</p>
            <div className="flex flex-wrap gap-2">
              {result.conditions.map(({ label, severity, color }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: color + '15', border: `1px solid ${color}40`, color }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  {label} — <span className="opacity-70">{severity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Confidence Score</p>
              <span className="font-display font-700 text-2xl text-gradient">{pct}%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${pct}%`,
                  background: 'linear-gradient(90deg, #1f7d1f, #4ab84a)',
                  boxShadow: '0 0 8px rgba(74,184,74,0.5)'
                }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Low</span>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>High</span>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity size={15} style={{ color: '#2d9e2d' }} />
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Diagnosis</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {result.diagnosis}
            </p>
          </div>

          {/* Recommendations */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={15} style={{ color: '#f59e0b' }} />
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Recommendations</p>
            </div>
            <ul className="space-y-3">
              {result.recommendations.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(45,158,45,0.1)' }}>
                    <Icon size={13} style={{ color: '#2d9e2d' }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
