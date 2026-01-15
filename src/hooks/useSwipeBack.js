import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useSwipeBack() {
    const navigate = useNavigate();

    useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    const threshold = 50; // distancia mínima para swipe
    const restraint = 100; // desviación vertical permitida

    const preventDefault = (e) => e.preventDefault();

    // --- Touch Events ---
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    };

    const handleTouchMove = (e) => {
      // evita scroll mientras arrastras horizontalmente
        const touch = e.touches[0];
        const distX = touch.clientX - startX;
        const distY = touch.clientY - startY;
        if (Math.abs(distX) > Math.abs(distY)) e.preventDefault();
        };

    const handleTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        const distX = touch.clientX - startX;
        const distY = touch.clientY - startY;
        if (distX > threshold && Math.abs(distY) < restraint) {
        navigate(-1);
        }
    };

    // --- Mouse Events ---
    const handleMouseDown = (e) => {
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
        document.addEventListener("mousemove", preventDefault, { passive: false });
    };

    const handleMouseUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener("mousemove", preventDefault);
        const distX = e.clientX - startX;
        const distY = e.clientY - startY;
        if (distX > threshold && Math.abs(distY) < restraint) {
        navigate(-1);
        }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mousemove", preventDefault);
    };
  }, [navigate]);
}
