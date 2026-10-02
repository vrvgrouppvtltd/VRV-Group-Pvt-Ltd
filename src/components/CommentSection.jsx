import { useState } from 'react'

/*
  V1 placeholder only. Comments live in local component state and vanish
  on refresh — nothing is sent to a server yet. Wire this up to a real
  backend/API in v2.
*/
export default function CommentSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setComments((prev) => [
      { id: Date.now(), name: name.trim(), message: message.trim() },
      ...prev,
    ])
    setName('')
    setMessage('')
  }

  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow mb-2 text-center">Leave a note</p>
        <h2 className="font-display text-3xl text-navy-900 text-center mb-3">
          Tell us about your experience
        </h2>
        <p className="text-xs text-center text-navy-900/50 mb-8">
          Demo only for now — comments stay on your screen and aren't saved
          or sent anywhere. Real storage is coming in v2.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-navy-900/15 rounded-md px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a few words about VRV Group..."
            rows={4}
            className="w-full border border-navy-900/15 rounded-md px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
          <button type="submit" className="bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-navy-800 transition-colors">
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <ul className="space-y-4">
            {comments.map((c) => (
              <li key={c.id} className="border-t border-navy-900/10 pt-4">
                <p className="font-semibold text-navy-900 text-sm">{c.name}</p>
                <p className="text-sm text-navy-900/70 mt-1">{c.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
