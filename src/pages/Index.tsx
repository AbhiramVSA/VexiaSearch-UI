
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Database, Rocket, Shield, Upload, Stars, Sparkles, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated space background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-purple-500/30 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center animate-pulse">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Cosmic RAG Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-purple-500/20">Sign In</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Stars className="w-4 h-4 mr-2" />
            Powered by Cosmic AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Intelligent Document
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Analysis</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Beyond the Stars</span>
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Upload your PDFs and chat with your documents using advanced RAG technology powered by cosmic intelligence. 
            Get instant answers from your document library with AI that reaches beyond the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-200">
              <Upload className="w-5 h-5 mr-2" />
              <a href="/upload">Upload Documents</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400">
              <a href="/demo">View Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything you need for cosmic document intelligence
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Our platform combines document processing, AI chat, and intelligent search 
              to transform how you interact with your documents across the digital cosmos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Quantum Document Upload</CardTitle>
                <CardDescription className="text-purple-200">
                  Securely upload and process PDF documents with automatic text extraction and cosmic indexing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Cosmic AI Chat Interface</CardTitle>
                <CardDescription className="text-purple-200">
                  Chat naturally with your documents and get intelligent responses based on stellar content analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-indigo-500/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Galaxy Session Management</CardTitle>
                <CardDescription className="text-purple-200">
                  Keep track of all your conversations and maintain context across multiple chat sessions in the cosmic void.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Warp-Speed Processing</CardTitle>
                <CardDescription className="text-purple-200">
                  Lightning-fast document processing with quantum queue management for efficient handling of multiple files.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Galactic Security</CardTitle>
                <CardDescription className="text-purple-200">
                  Enterprise-grade security with user authentication and private document storage across the cosmic network.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Stellar File Management</CardTitle>
                <CardDescription className="text-purple-200">
                  Organize, search, and manage your document library with intuitive cosmic file management tools.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to launch your document workflow into the cosmos?
          </h2>
          <p className="text-lg text-purple-200 mb-8">
            Join thousands of cosmic explorers who are already using AI to unlock insights from their documents across the galaxy.
          </p>
          <Button size="lg" className="px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-200">
            <Rocket className="w-5 h-5 mr-2" />
            Launch Into Space
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center animate-pulse">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Cosmic RAG Portal</h3>
          </div>
          <p className="text-purple-300">
            Intelligent document analysis powered by cosmic AI technology beyond the stars.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
