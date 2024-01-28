import React from 'react';

const Header = () => {
return (
    <header>
    <div>
        <div className="topbar">
        <div className="logo">
            <div>
            <div className="logo_edyoda">EDYODA</div>
            <p className="logo_stories">Stories</p>
            </div>
        </div>
        <div className="dropdown">
            <div className="dropdown_text">
            Explore Categories
            <img
                className="dropdown_icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                alt="dropdown_icon"
            />
            </div>
        </div>
        </div>
    </div>
    </header>
);
};

export default Header;