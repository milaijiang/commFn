import React, { useState, useEffect, useRef } from "react";

function useInterval (callback, delay) {
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