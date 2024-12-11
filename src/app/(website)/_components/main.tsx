import React from "react";
import {
  Video,
  Share2,
  Users,
  MessageSquare,
  Cpu,
  Eye,
  User,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Main = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-blue-500" />,
      title: "Real-Time Video Recording",
      description:
        "Seamless video recording and streaming without third-party dependencies",
    },
    {
      icon: <Share2 className="w-6 h-6 text-purple-500" />,
      title: "Instant Sharing",
      description: "Share videos instantly with global prospects and teammates",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Team Collaboration",
      description: "Invite team members and collaborate with real-time tools",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-500" />,
      title: "AI Transcriptions",
      description:
        "Accurate AI-powered transcriptions for comprehensive video insights",
    },
    {
      icon: <Cpu className="w-6 h-6 text-teal-500" />,
      title: "Advanced AI Features",
      description:
        "Explore cutting-edge AI capabilities with a one-time trial access",
    },
    {
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: "Comprehensive Analytics",
      description:
        "Detailed view counts, engagement metrics, and performance tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1629] via-[#121D35] to-[#0E1525] text-white">
      {/* Navigation */}
      <div className="flex flex-col py-8 px-6 xl:px-0 container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-3xl font-bold flex items-center gap-x-4">
            <Image
              alt="Opal logo"
              src="/opal-logo.svg"
              width={48}
              height={48}
              className="rounded-lg shadow-md"
            />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Opal
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-blue-300 transition-colors">
              Home
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
            <Link href="/auth/sign-in">
              <Button
                variant="outline"
                className="text-base flex items-center gap-x-2 hover:bg-gray-800"
              >
                <User className="w-4 h-4" />
                Login
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mt-20 px-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Professional Video Recording & Streaming Platform
          </h1>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            Record, stream, and share high-quality videos with AI-powered
            features designed to maximize engagement and streamline your
            workflow
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-xl font-semibold shadow-lg transition-all hover:shadow-blue-600/50">
              Try For Free
            </button>
            <button className="border border-gray-700 hover:border-gray-600 text-white px-10 py-3.5 rounded-xl font-semibold bg-transparent hover:bg-gray-800 transition-all">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Powerful Features for Video Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A2137] p-7 rounded-2xl hover:bg-[#1F2843] transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <div className="mb-5 opacity-80">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white/90">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Free Tier",
                subtitle: "Perfect for getting started",
                features: [
                  "720p Video Recording",
                  "5 Videos per month",
                  "Basic Analytics",
                ],
                buttonText: "Get Started",
                bgClass: "bg-[#1A2137] hover:bg-[#1F2843]",
              },
              {
                title: "Pro Plan",
                subtitle: "For professional content creators",
                features: [
                  "1080p Video Recording",
                  "Unlimited Videos",
                  "Advanced Analytics",
                  "AI Features",
                  "Team Workspaces",
                ],
                buttonText: "Upgrade to Pro",
                bgClass:
                  "bg-[#1A2137] hover:bg-[#1F2843] border-2 border-blue-600/30",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`${plan.bgClass} p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl`}
              >
                <h3 className="text-2xl font-bold mb-4 text-white/90">
                  {plan.title}
                </h3>
                <p className="text-gray-400 mb-6">{plan.subtitle}</p>
                <ul className="space-y-3 mb-8 text-gray-300">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
