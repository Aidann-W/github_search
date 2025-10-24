import { useState } from 'react';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    // ... rest of the component
    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    );
}
