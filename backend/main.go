package main

import (
	"fmt"
	"net/http"

	_ "github.com/BartPlaza/simple_chat/backend/pkg/websocket"

)

func serveWs(w http.ResponseWriter, r *http.Request) {
	return
//	ws, err := websocket.Upgrade{w, r}
}

func setupRoutes() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Simple server")
	})
	http.HandleFunc("/ws", serveWs)
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
