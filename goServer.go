package main

import (
	"net/http"
	"strings"
)

func main() {
	// Create a new file server with custom cache-control headers
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", noCache(fs))

	// Start the server
	http.ListenAndServe(":8080", nil)
}

// noCache adds cache control headers to responses
func noCache(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.Contains(r.URL.Path, "messagePage.html") {
			w.Header().Set("Cache-Control", "no-store")
		} else {
			w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		}
		h.ServeHTTP(w, r)
	})
}
