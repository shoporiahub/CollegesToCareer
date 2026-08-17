import { useNavigate } from "react-router-dom";
import {
    Plus,
    User,
    LogOut,
} from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { useAuthStore } from "../../auth/store/auth.store";

function DashboardPage() {
    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 py-12">

            <div className="mx-auto max-w-5xl px-4">

                {/* Hero */}

                <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-white shadow-2xl">

                    <h1 className="text-4xl font-extrabold">
                        Welcome back, {user?.name} 👋
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg text-slate-300">
                        Create beautiful marriage biodatas in minutes using
                        premium templates designed for modern families.
                    </p>

                </div>

                {/* Profile */}

                <Card className="mt-8 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur">

                    <div className="mb-6 flex items-center gap-3">

                        <div className="rounded-full bg-blue-100 p-3">
                            <User
                                className="text-blue-700"
                                size={22}
                            />
                        </div>

                        <h2 className="text-2xl font-semibold">
                            Profile Information
                        </h2>

                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        <div>

                            <p className="text-sm text-slate-500">
                                Name
                            </p>

                            <p className="mt-1 text-lg font-semibold">
                                {user?.name}
                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Email
                            </p>

                            <p className="mt-1 text-lg font-semibold">
                                {user?.email}
                            </p>

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Mobile
                            </p>

                            <p className="mt-1 text-lg font-semibold">
                                {user?.mobile}
                            </p>

                        </div>

                    </div>

                </Card>

                {/* Quick Actions */}

                <Card className="mt-8 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur">

                    <h2 className="mb-6 text-2xl font-semibold">
                        Quick Actions
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <Button
                            onClick={() => navigate("/biodata")}
                            className="cursor-pointer"
                        >
                            <Plus size={18} />
                            Create Biodata
                        </Button>

                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            className="cursor-pointer"

                        >
                            <LogOut size={18} />
                            Logout
                        </Button>

                    </div>

                </Card>

            </div>

        </div>
    );
}

export default DashboardPage;