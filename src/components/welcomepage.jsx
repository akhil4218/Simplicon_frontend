import React from "react";


const WelcomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Main Section */}
      <section style={{ textAlign: "center", padding: "50px", backgroundColor: "#F9F9F9" }}>
        <h1 style={{ fontSize: "2.5em", color: "#2E3A59" }}>Welcome to Simplicon Tax Advisors</h1>
        <p style={{ fontSize: "1.2em", color: "#4A4A4A" }}>
          Your one-stop solution for easy and secure tax filing in the USA.
        </p>
        <p style={{ fontSize: "1em", color: "#7A7A7A", maxWidth: "600px", margin: "0 auto" }}>
          Start filing your taxes in minutes, maximize your refund, and get expert guidance every step of the way.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ padding: "50px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "2em", color: "#2E3A59" }}>Why Choose Simplicon Tax Advisors?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "250px",
              padding: "20px",
              border: "2px solid #000000", // Border for each section
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>Easy Filing</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              File your taxes in minutes with an intuitive interface and step-by-step guidance.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              maxWidth: "250px",
              padding: "20px",
              border: "2px solid #000000", // Border for each section
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>Maximize Refund</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              Get the best possible tax return with expert tips and automated calculations.
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              maxWidth: "250px",
              padding: "20px",
              border: "2px solid #000000", // Border for each section
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>Secure & Trusted</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              Your data is protected with industry-leading security protocols, ensuring peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "50px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "2em", color: "#2E3A59" }}>What Our Users Say</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "30px" }}>
          <div style={{ maxWidth: "300px", textAlign: "center", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <p style={{ fontSize: "1em", color: "#7A7A7A", fontStyle: "italic" }}>
              "Simplicon Tax Advisors made filing taxes so easy! I got my refund within weeks and had no trouble at all."
            </p>
            <h4 style={{ fontSize: "1.2em", color: "#0061F2" }}>John D.</h4>
          </div>
          <div style={{ maxWidth: "300px", textAlign: "center", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
            <p style={{ fontSize: "1em", color: "#7A7A7A", fontStyle: "italic" }}>
              "The step-by-step guidance was incredibly helpful. I felt confident throughout the whole process."
            </p>
            <h4 style={{ fontSize: "1.2em", color: "#0061F2" }}>Sarah L.</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "50px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "2em", color: "#2E3A59" }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: "900px", margin: "0 auto", marginTop: "30px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>How do I get started?</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              Simply click on the "Get Started" button above to begin your tax filing process.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>Is my data secure?</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              Yes, we use industry-leading encryption and security measures to protect your personal information.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#0061F2" }}>How much does it cost?</h3>
            <p style={{ fontSize: "1em", color: "#7A7A7A" }}>
              We offer competitive pricing, with options for both simple and more complex tax filings. Pricing will be shown before you finalize the submission.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ padding: "20px", backgroundColor: "#2E3A59", color: "#fff", textAlign: "center" }}>
        <p>&copy; 2024 Simplicon Tax Advisors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
