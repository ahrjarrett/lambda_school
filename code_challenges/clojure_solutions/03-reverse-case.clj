;; Write a function that takes in a string, reverses the 'casing' of that string.

;; ```
;; reverseCase('HelloWorld');
;; --> 'hELLOwORLD';

;; reverseCase('DOG cat');
;; --> 'dog CAT';
;; ```

(ns lambda-school
  (:require [clojure.string :as str]))

;; BROKEN! 01/28/18
(defn reverse-case [s]
  (str/replace s #"[a-z]" #(str (str/upper-case %1)))
  )

(reverse-case "DOG cat") ;; => dog CAT
