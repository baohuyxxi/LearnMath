import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { TestComponent } from '../components/TestComponent/TestComponent';

const TestComponent = React.lazy(() =>
    import('~/components/TestComponent/TestComponent').then((module) => ({ default: module.TestComponent }))
);

const Auth = () => {
    return (
        <Routes>
            <Route
                path="/test"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <TestComponent />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default Auth;
