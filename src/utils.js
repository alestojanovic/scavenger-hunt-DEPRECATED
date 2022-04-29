import React from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
import { toast } from "react-toastify";

export function useBlocker(blocker, when = true) {
  const { navigator } = React.useContext(NavigationContext);

  React.useEffect(() => {
    if (!when) return;

    const lock = navigator.block((tx) => {
      const autoLockingTx = {
        ...tx,
        retry() {
          tx.retry();
        },
      };

      blocker(autoLockingTx);
    });

    return lock;
  }, [navigator, blocker, when]);
}

export function useLock(message, when = true) {
  const blocker = React.useCallback(
    (tx) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when);
}

export function useUnlocker(blocker, when = true) {
  const { navigator } = React.useContext(NavigationContext);

  React.useEffect(() => {
    if (!when) return;

    const unlock = navigator.block((tx) => {
      const autoUnlockingTx = {
        ...tx,
        retry() {
          unlock();
          tx.retry();
        },
      };

      blocker(autoUnlockingTx);
    });

    return unlock;
  }, [navigator, blocker, when]);
}

export function useUnlock(message, when = true) {
  const blocker = React.useCallback(
    (tx) => {
      if (toast.success(message)) tx.retry();
    },
    [message]
  );

  useUnlocker(blocker, when);
}
