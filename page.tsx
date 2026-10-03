 "use client";

import { useState } from "react";

const languages = [
  ["Hindi", "hi-IN"], ["English", "en-US"], ["Gujarati", "gu-IN"],
  ["Chinese (Simplified)", "zh-CN"], ["Chinese (Traditional)", "zh-TW"],
  ["Spanish", "es-ES"], ["French", "fr-FR"], ["German", "de-DE"],
  ["Portuguese", "pt-BR"], ["Italian", "it-IT"], ["Japanese", "ja-JP"],
  ["Korean", "ko-KR"], ["Arabic", "ar-SA"], ["Indonesian", "id-ID"],
  ["Marathi", "mr-IN"], ["Bengali", "bn-IN"], ["Tamil", "ta-IN"],
  ["Telugu", "te-IN"], ["Kannada", "kn-IN"], ["Malayalam", "ml-IN"],
  ["Punjabi", "pa-IN"], ["Urdu", "ur-PK"]
] as const;

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [source, setSource] = useState("Auto detect");
  const [target, setTarget] = useState("Hindi");
  const [voice, setVoice] = useState("Natural Female");
  const [status, setStatus] = useState("");

  async function startDubbing() {
    if (!file) return setStatus("Please upload a video first.");
    setStatus("Prototype ready — connect your AI providers to start processing.");
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand"><span>✦</span> DubFlow AI</div>
        <div className="navtag">MULTILINGUAL DUBBING</div>
      </nav>

      <section className="hero">
        <div className="pill">AI VIDEO DUBBING</div>
        <h1>Dub any video.<br/><em>Speak every language.</em></h1>
        <p>Upload a video, choose your language and voice, and create a natural dubbed version.</p>
      </section>

      <section className="card">
        <label className="upload">
          <input type="file" accept="video/*" onChange={e => setFile(e.target.files?.[0] || null)} />
          <div className="uploadIcon">↑</div>
          <strong>{file ? file.name : "Drop your video here"}</strong>
          <span>{file ? `${(file.size / 1024 / 1024).toFixed(1)} MB selected` : "MP4, MOV, WebM • up to 500 MB"}</span>
        </label>

        <div className="grid">
          <div>
            <label>Original language</label>
            <select value={source} onChange={e => setSource(e.target.value)}>
              <option>Auto detect</option>
              {languages.map(([name]) => <option key={name}>{name}</option>)}
            </select>
          </div>
          <div>
            <label>Dub into</label>
            <select value={target} onChange={e => setTarget(e.target.value)}>
              {languages.map(([name]) => <option key={name}>{name}</option>)}
            </select>
          </div>
          <div>
            <label>AI voice</label>
            <select value={voice} onChange={e => setVoice(e.target.value)}>
              <option>Natural Female</option>
              <option>Natural Male</option>
              <option>Warm Female</option>
              <option>Deep Male</option>
            </select>
          </div>
          <div>
            <label>Output</label>
            <select defaultValue="MP4">
              <option>MP4</option>
              <option>MP3 audio only</option>
              <option>WAV audio only</option>
            </select>
          </div>
        </div>

        <button className="start" onClick={startDubbing}>Create dubbed video <span>→</span></button>
        {status && <div className="status">{status}</div>}
      </section>

      <section className="steps">
        {[
          ["01", "Transcribe", "Detect speech and create a timed transcript."],
          ["02", "Translate", "Translate the dialogue into your chosen language."],
          ["03", "Voice", "Generate natural multilingual AI speech."],
          ["04", "Sync", "Mix and synchronize the new voice with the video."]
        ].map(([n,t,d]) => <div className="step" key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></div>)}
      </section>

      <footer>DubFlow AI • Prototype • Add your licensed AI providers in the backend</footer>
    </main>
  );
}