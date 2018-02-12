(ns tic-tac-toe-client.views
  (:require [re-frame.core :as re-frame]
            [tic-tac-toe-client.subs :as subs]
            ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div "Hello from " @name]))
