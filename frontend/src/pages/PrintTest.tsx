import { useState } from 'react'

function PrintTest() {
  const [status, setStatus] = useState<string | null>(null)
  const [content, setContent] = useState('TEST ORDER')

  const addPrintOrder = async () => {
    setStatus('Adding...')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/print-queue`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus(`Added order #${data.id} (${data.status})`)
    } catch {
      setStatus('Failed to add print order')
    }
  }

  const listPrintOrders = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/print-queue`)
    const data = await res.json()
    console.log(data)
  }

  const clearPrintOrders = async () => {
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/print-queue`, { method: 'DELETE' })
    setStatus('Cleared all print orders')
  }

  const getFirstPrintOrder = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/print-queue/first`)
    if (!res.ok) {
      setStatus('No pending print jobs')
      return
    }
    const data = await res.json()
    setStatus(`First order #${data.id}: ${data.content}`)
  }

  const deleteFirstPrintOrder = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/print-queue/first`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      setStatus('No pending print jobs')
      return
    }
    const data = await res.json()
    setStatus(`Deleted order #${data.id}`)
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-semibold text-primary">Print Test</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="rounded-lg border border-primary px-4 py-2 text-primary"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Print content"
        />
        <button
          type="button"
          className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
          onClick={addPrintOrder}
        >
          Add Print Order
        </button>
      </div>
      <button
        type="button"
        className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
        onClick={listPrintOrders}
      >
        Show All (console)
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
        onClick={clearPrintOrders}
      >
        Clear All
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
        onClick={getFirstPrintOrder}
      >
        Get First
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
        onClick={deleteFirstPrintOrder}
      >
        Delete First
      </button>
      {status && <p className="text-sm text-primary">{status}</p>}
    </div>
  )
}

export default PrintTest
