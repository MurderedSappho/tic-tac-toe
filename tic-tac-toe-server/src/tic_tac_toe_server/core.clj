(ns tic-tac-toe-server.core
  (:require [aleph.http :as http])
  (:gen-class))

(defn handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello!"})

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (http/start-server handler {:port 8090}))
