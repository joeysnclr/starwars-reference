import React from "react";
import "../css/Loading.css";

export default function Loading({ loading }) {
    if (loading) {
        return (
            <div className="loading-section">
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    return null;
}
