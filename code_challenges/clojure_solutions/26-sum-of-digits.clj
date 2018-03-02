;; repl.it: https://repl.it/@ahrjarrett/sum-of-digits-in-clojure

;; Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.Assume all numbers will be positive. 
;; Sample: 
;; 23  => 5
;; 496 => 19
;; sumOfDigits(23) => 5 because 2 + 3 = 5.

;; Note that RECUR handles tail-call recursion for us,
;; but in this case the function is already written
;; with the function call in tail position:

(defn sum-of-digits [n]
  (loop [count n acc 0]
        (if (zero? count) acc
            (recur
              (quot count 10)
              (+ acc (mod count 10))))))

(sum-of-digits 23)  ;; => 5
(sum-of-digits 496) ;; => 19
