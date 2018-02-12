(ns tic-tac-toe-client.events
  (:require [re-frame.core :as re-frame]
            [tic-tac-toe-client.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))
