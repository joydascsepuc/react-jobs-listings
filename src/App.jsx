import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import HomePage from "../src/pages/HomePage";
import JobsPage from "../src/pages/JobsPage";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
