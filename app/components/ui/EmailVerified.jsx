export default function EmailVerified() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>Email Verified</h1>
            <p>Your email has been successfully verified. You can now log in to use our application.</p>
            <button onClick={() => window.location.href = '/login'}>Go to Login</button>
        </div>
    );
}