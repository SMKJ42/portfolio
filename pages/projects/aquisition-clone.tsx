import { Layout } from "@/components/Layout";
import { NextPageWithLayout } from "../_app";

const realtyHub: NextPageWithLayout = () => {
    return <div className="w-full flex justify-center">Coming Soon...</div>;
};

realtyHub.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};

export default realtyHub;
