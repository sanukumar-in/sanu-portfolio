import { useState, useEffect } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (validate()) {
            setFormData({ name: '', email: '', message: '' });
            
            setShowToast(true);
        }
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <section id="contact" className="py-20 px-6 w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 tracking-tight text-black dark:text-white">
                Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-lg border bg-white dark:bg-gray-800 text-black dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500 transition ${
                            errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="Your name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-lg border bg-white dark:bg-gray-800 text-black dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500 transition ${
                            errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-5 py-4 rounded-lg border bg-white dark:bg-gray-800 text-black dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-500 transition resize-none ${
                            errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="Your message..."
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-all duration-300 text-lg"
                >
                    Send Message
                </button>
            </form>

            {showToast && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg shadow-2xl animate-[slideIn_0.3s_ease-out]">
                    <p className="font-medium">Message sent successfully!</p>
                    <button 
                        onClick={() => setShowToast(false)}
                        className="ml-4 text-gray-400 hover:text-white dark:hover:text-black transition"
                    >
                        ✕
                    </button>
                </div>
            )}
        </section>
    );
};