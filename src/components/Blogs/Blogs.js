import React from "react";
import './Blogs.css';

const Blog = () => {
  return (
    <div className="container">
      <div className="blogs-card">
        <div className="blog-card">
          <h5>
            What is the difference between authorization and authentication?
          </h5>
          <p>
            Authentication and authorization are two vital information
            security processes that administrators use to protect systems and
            information. Authentication verifies the identity of a user or
            service, and authorization determines their access rights. Although
            the two terms sound alike, they play separate but equally essential
            roles in securing applications and data. Understanding the
            difference is crucial. Combined, they determine the security of a
            system. You cannot have a secure solution unless you have configured
            both authentication and authorization correctly.
          </p>
        </div>
        <div className="blog-card">
          <h5>অনুমোদন এবং প্রমাণীকরণ মধ্যে পার্থক্য কি?</h5>
          <p>
            প্রমাণীকরণ এবং অনুমোদন হল দুটি গুরুত্বপূর্ণ তথ্য সুরক্ষা
            প্রক্রিয়া যা প্রশাসকরা সিস্টেম এবং তথ্য সুরক্ষার জন্য ব্যবহার করে।
            প্রমাণীকরণ একটি ব্যবহারকারী বা পরিষেবার পরিচয় যাচাই করে এবং অনুমোদন
            তাদের অ্যাক্সেসের অধিকার নির্ধারণ করে। যদিও দুটি শব্দ একই রকম
            শোনাচ্ছে, তারা অ্যাপ্লিকেশন এবং ডেটা সুরক্ষিত করার ক্ষেত্রে আলাদা
            কিন্তু সমানভাবে অপরিহার্য ভূমিকা পালন করে। পার্থক্য বোঝা অত্যন্ত
            গুরুত্বপূর্ণ। সম্মিলিতভাবে, তারা একটি সিস্টেমের নিরাপত্তা নির্ধারণ
            করে। আপনি সঠিকভাবে প্রমাণীকরণ এবং অনুমোদন উভয় কনফিগার না করা
            পর্যন্ত আপনার একটি নিরাপদ সমাধান থাকতে পারে না।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
