"""
Python簡易ローカルサーバー
"""

import http.server
import socketserver

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    print(f"You can access to http://localhost:{PORT} now!")
    print("Press Ctrl + C to quit")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped the server")
