import React, { useState, useEffect, useRef } from "react";
/**
 *定时器hook
 *
 * @param {function} callback
 * @param {number} delay  //为null则暂停定时器 
 */
function useInterval(callback, delay) {
    const saveCallback = useRef();

    useEffect(() => {
        saveCallback.current = callback
    }, [callback])

    useEffect(() => {
        function task() {
            saveCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(task, delay);
            return () => clearInterval(id)
        }
    }, [delay])
}

export default useInterval