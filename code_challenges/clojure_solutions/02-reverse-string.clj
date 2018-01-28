;; Expected function: `reverseString`
;; Write a function called *reverseString* that accepts a string and returns a reversed copy of the string.
;; 
;; Input Example:
;; 
;; ```
;; 'hello world'
;; 'asdf'
;; 'CS rocks!'
;; ```
;; 
;; Output Example:
;; 
;; ```
;; 'dlrow olleh'
;; 'fdsa'
;; '!skcor SC'
;; ```

(ns lambda-school
  (:require [clojure.string :as str]))

(defn reverse-string [s]
  (apply str (reduce conj () (seq s))))

(reverse-string "hello") ;; => "olleh"
