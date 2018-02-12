(ns figwheel.connect.build-dev (:require [figwheel.client] [tic-tac-toe-client.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/tic-tac-toe-client.core.mount-root (apply js/tic-tac-toe-client.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'tic-tac-toe-client.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

