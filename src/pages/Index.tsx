
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Database, Rocket, Shield, Upload, Stars, Sparkles, Zap, Brain, Globe, Layers } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic space background with more elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-16 left-2/3 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-purple-400/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-cyan-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-8 bg-gradient-to-b from-purple-500/20 to-transparent animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Unique navigation with floating design */}
      <nav className="border-b border-purple-500/30 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center animate-glow">
                  <Rocket className="w-7 h-7 text-white animate-float" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Cosmic RAG</h1>
                <p className="text-xs text-purple-300">Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Unique hero section with diagonal layout */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                  <Brain className="w-4 h-4 mr-2" />
                  Neural Document Intelligence
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white block animate-fade-in">Transform</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 block animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Documents
                </span>
                <span className="text-white block animate-fade-in" style={{animationDelay: '0.4s'}}>Into Knowledge</span>
              </h1>
              
              <p className="text-xl text-purple-200 leading-relaxed max-w-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
                Harness the power of cosmic AI to unlock insights from your documents. 
                Upload, analyze, and chat with your PDFs using advanced RAG technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                  <Upload className="w-5 h-5 mr-2" />
                  <a href="/upload">Launch Mission</a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                  <a href="/demo">Explore Demo</a>
                </Button>
              </div>
            </div>

            {/* Right side - Interactive visual */}
            <div className="relative animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="relative w-full h-96">
                {/* Central orb */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 rounded-full animate-glow opacity-80"></div>
                
                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full"></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-400/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique features section with hexagonal grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Cosmic Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond Traditional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Document Processing</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Experience the next generation of document intelligence with features that transcend conventional limitations.
            </p>
          </div>

          {/* Hexagonal feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group bg-black/30 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Neural Document Processing</CardTitle>
                <CardDescription className="text-purple-200">
                  Advanced PDF parsing with quantum-level text extraction and intelligent content mapping across dimensional layers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group bg-black/30 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce" style={{animationDelay: '0.1s'}}>
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Conversational AI Interface</CardTitle>
                <CardDescription className="text-purple-200">
                  Engage in natural conversations with your documents using advanced RAG technology and cosmic intelligence networks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group bg-black/30 border-indigo-500/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce" style={{animationDelay: '0.2s'}}>
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Temporal Session Management</CardTitle>
                <CardDescription className="text-purple-200">
                  Maintain conversation continuity across time and space with persistent memory and contextual understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group bg-black/30 border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce" style={{animationDelay: '0.3s'}}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Quantum Processing Speed</CardTitle>
                <CardDescription className="text-purple-200">
                  Lightning-fast document analysis with parallel processing across multiple dimensional computation layers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group bg-black/30 border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce" style={{animationDelay: '0.4s'}}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Cosmic Security Protocol</CardTitle>
                <CardDescription className="text-purple-200">
                  Multi-dimensional encryption with quantum entanglement security ensuring your data remains protected across all realities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group bg-black/30 border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Dimensional File Organization</CardTitle>
                <CardDescription className="text-purple-200">
                  Organize your documents across multiple dimensions with intelligent categorization and cosmic file management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique CTA section with flowing design */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-cyan-900/50 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/30 overflow-hidden">
            {/* Flowing background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transcend
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Digital Boundaries?</span>
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Join the cosmic revolution of document intelligence. Transform how you interact with information 
                and unlock insights that exist beyond conventional understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button size="lg" className="px-10 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-lg">
                  <Rocket className="w-6 h-6 mr-3" />
                  Begin Cosmic Journey
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-4 border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm text-lg">
                  <Stars className="w-6 h-6 mr-3" />
                  Explore the Universe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique footer with cosmic design */}
      <footer className="relative z-10 bg-black/60 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center animate-pulse">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cosmic RAG Portal</h3>
                  <p className="text-sm text-purple-300">Beyond Intelligence</p>
                </div>
              </div>
              <p className="text-purple-300 leading-relaxed">
                Transcending the boundaries of traditional document processing through cosmic AI technology 
                and dimensional intelligence networks.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Cosmic Features</h4>
              <ul className="space-y-2 text-purple-300">
                <li className="hover:text-white transition-colors cursor-pointer">Neural Document Processing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Quantum Chat Interface</li>
                <li className="hover:text-white transition-colors cursor-pointer">Dimensional File Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Temporal Session History</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Mission Control</h4>
              <ul className="space-y-2 text-purple-300">
                <li className="hover:text-white transition-colors cursor-pointer">Launch Documentation</li>
                <li className="hover:text-white transition-colors cursor-pointer">API Integration</li>
                <li className="hover:text-white transition-colors cursor-pointer">Support Channel</li>
                <li className="hover:text-white transition-colors cursor-pointer">Community Hub</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-500/30 pt-8 text-center">
            <p className="text-purple-300">
              © 2024 Cosmic RAG Portal. Powered by interdimensional intelligence and quantum computing networks.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
