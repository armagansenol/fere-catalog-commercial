type FetchOptions = RequestInit & {
  cache?: RequestCache
}

export async function fetchWithErrorHandling<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const defaultOptions: FetchOptions = {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const mergedOptions = { ...defaultOptions, ...options }

  try {
    const response = await fetch(`https://cms.ferecatalog.com/services/${url}`, mergedOptions)

    if (!response.ok) {
      // You can customize error handling based on status codes
      if (response.status === 404) {
        throw new Error("Resource not found")
      } else if (response.status === 401) {
        throw new Error("Unauthorized")
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    }

    return await response.json()
  } catch (error) {
    // Log the error or send it to an error tracking service
    console.error("Fetch error:", error)
    throw error // Re-throw the error so it can be handled by the caller if needed
  }
}
