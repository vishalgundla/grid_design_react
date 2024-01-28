import React from 'react';

const categories = [
{ name: 'All', active: true },
{ name: 'Artificial Intelligence' },
{ name: 'Cloud Computing' },
{ name: 'DevOps' },
{ name: 'Programming Language' },
{ name: 'Mobile Application Development' },
{ name: 'Technology and Tools' },
{ name: 'Get a Job in IT Company' },
{ name: 'Others' },
];

const Main = () => {
return (
    
    <div style={{ backgroundColor: '#f2f6ff', marginLeft: 120, marginRight: 200 }}>
    <div className="category_container">Trending Post</div>
    <div>
        <div className="filter-section">
        <div className="filter-section-icon-container">
            <div>
            <img
                className="filter-section-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
                alt="Filter icon"
            />
            </div>
            <p className="filter-section-text">Filter by Category</p>
        </div>
        <div className="category-list">
            {categories.map((category) => (
            <div
                key={category.name}
                className={`category-item ${category.active ? 'category-item-active' : ''}`}
            >
                {category.name}
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
);
};

export default Main;