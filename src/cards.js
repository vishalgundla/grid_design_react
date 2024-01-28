import React from 'react';

const postsData = [
    {
        "id": 1,
        "title": "Introduction to a machine learning online course",
        "author": "John Doe",
        "category": "Artificial Intelligence",
        "date": "2023-12-18",
        "snippet": "In this post, we'll explore how to build your own AI-powered robot using Python, Raspberry Pi, and readily available sensors. Learn about programming basic movements, voice recognition, and object detection...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
    },
    {
        "id": 2,
        "title": "Mastering Data Analysis with pandas in Python",
        "author": "Jane Smith",
        "category": "Data Science",
        "date": "2023-12-15",
        "snippet": "Pandas is a powerful Python library for data manipulation and analysis. This post dives deep into essential pandas functionalities like data structures, cleaning, wrangling, and advanced operations...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
    },
    {
        "id": 3,
        "title": "5 Tips for Landing Your Dream Tech Job",
        "author": "Michael Jackson",
        "category": "Career",
        "date": "2023-12-12",
        "snippet": "Navigating the competitive tech job market can be challenging. We've compiled 5 key tips to help you stand out from the crowd, craft a compelling resume, ace interviews, and land your dream role...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
    },
    {
        "id": 4,
        "title": "Demystifying Web Scraping with Python",
        "author": "Sarah Miller",
        "category": "Web Development",
        "date": "2023-12-10",
        "snippet": "Web scraping automates data extraction from websites. This post guides you through the basics of web scraping with Python libraries like BeautifulSoup and Scrapy, highlighting ethical considerations and practical applications...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
    },
    {
        "id": 5,
        "title": "Unlocking the Power of Cloud Computing with AWS",
        "author": "David Lee",
        "category": "Cloud Computing",
        "date": "2023-12-07",
        "snippet": "Amazon Web Services (AWS) is a leading cloud computing platform. This post introduces fundamental AWS services like S3, EC2, and Lambda, showcasing their potential for scalable applications and cost-effective solutions...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
    },
    {
        "id": 6,
        "title": "Building Websites for Beginners with HTML and CSS",
        "author": "Emma Davis",
        "category": "Web Development",
        "date": "2023-12-05",
        "snippet": "Learn the fundamentals of web development with HTML and CSS! This post covers basic webpage structure, styling elements, and responsive design practices to create beautiful and functional websites...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
    },
    {
        "id": 7,
        "title": "Mastering Git and GitHub for Version Control",
        "author": "Chris Johnson",
        "category": "Software Development",
        "date": "2023-12-02",
        "snippet": "Version control helps manage code changes efficiently. This post explores Git commands, branching strategies, and collaboration tools like GitHub to streamline your development workflow...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
    },
    {
        "id": 8,
        "title": "Data Visualization with Python and Tableau",
        "author": "Anna Sharma",
        "category": "Data Science",
        "date": "2023-11-30",
        "snippet": "Turn data into compelling insights with Python libraries like Matplotlib and Tableau. This post guides you through data visualization techniques, storytelling with charts, and creating impactful dashboards...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
    },
    {
        "id": 9,
        "title": "The Ultimate Guide to Machine Learning with Python",
        "author": "Tom Wilson",
        "category": "Artificial Intelligence",
        "date": "2023-11-27",
        "date": "2023-11-27",
        "snippet": "Explore the exciting world of machine learning with Python libraries like scikit-learn and TensorFlow. This post demystifies key concepts, introduces popular algorithms, and guides you through building your own machine learning models...",
        "image": "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
    }
];

const Cards = () => {
    return (
    <div className="cards-container" style={{ backgroundColor: '#f2f6ff' }}>
        <div className="cards-wrapper" style={{ marginLeft: 120, marginRight: 120 }}>
        {postsData.map((post) => (
            <div key={post.id} className="card">
            <div className="blog-image-container">
                <img className="blog-image" src={post.image} alt={post.title} />
            </div>
            <div className="blog-card-details">
                <h3 className="blog-title">
                <div className="line-ellipsis">{post.title}</div>
                </h3>
                <p className="blog-author-name">
                {post.author}
                <span className="blog-publish-date">| {post.date}</span>
                </p>
                <div className="blog-description">
                <div>{post.snippet}</div>
                </div>
            </div>
            </div>
        ))}
        </div>
        <footer className="cards-footer" style={{ backgroundColor: '#172146', padding: '40px 16%' }}>
        {/* Footer content */}
        </footer>
    </div>
    );
};

export default Cards;