import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Database, Code, Shield, Upload, Terminal, Cpu, Network, Layers, Zap, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-px h-32 bg-zinc-800/50"></div>
        <div className="absolute top-40 right-1/3 w-32 h-px bg-zinc-800/50"></div>
        <div className="absolute bottom-1/3 left-1/6 w-24 h-px bg-zinc-700/50"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-24 bg-zinc-800/50"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Technical navigation */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <h1 className="text-lg font-mono text-zinc-100">RAG.CORE</h1>
                <p className="text-xs text-zinc-500 font-mono">v2.4.1</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 font-mono text-sm">
                AUTH
              </Button>
              <Button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-mono text-sm">
                <a href="/deploy">INITIALIZE</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Technical hero section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-zinc-700 text-zinc-400 font-mono text-xs">
                  <Brain className="w-3 h-3 mr-1" />
                  NEURAL.PROCESSING.MODULE
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight">
                <span className="text-zinc-100 block">DOCUMENT</span>
                <span className="text-zinc-400 block">INTELLIGENCE</span>
                <span className="text-zinc-600 block">FRAMEWORK</span>
              </h1>
              
              <div className="space-y-4 font-mono text-sm text-zinc-400">
                <p className="flex items-center">
                  <span className="text-zinc-600 mr-2">$</span>
                  Advanced retrieval-augmented generation protocol
                </p>
                <p className="flex items-center">
                  <span className="text-zinc-600 mr-2">$</span>
                  Multi-threaded document parsing engine
                </p>
                <p className="flex items-center">
                  <span className="text-zinc-600 mr-2">$</span>
                  Real-time semantic query processing
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-mono">
                  <Upload className="w-4 h-4 mr-2" />
                  <a href="/deploy">DEPLOY</a>
                </Button>
                <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 font-mono">
                  <a href="/chat">QUERY.INTERFACE</a>
                </Button>
              </div>
            </div>

            {/* Technical visualization */}
            <div className="relative">
              <div className="relative w-full h-80 border border-zinc-800 bg-zinc-900/50">
                <div className="absolute inset-4 border border-zinc-700">
                  <div className="w-full h-full relative">
                    {/* Data flow visualization */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-zinc-100 animate-pulse"></div>
                    <div className="absolute top-4 left-8 w-16 h-px bg-zinc-600"></div>
                    <div className="absolute top-4 left-24 w-3 h-3 border border-zinc-600"></div>
                    
                    <div className="absolute top-8 left-4 w-px h-8 bg-zinc-600"></div>
                    <div className="absolute top-16 left-4 w-20 h-px bg-zinc-600"></div>
                    <div className="absolute top-16 left-24 w-3 h-3 border border-zinc-600"></div>
                    
                    {/* Terminal-like output */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-1 font-mono text-xs text-zinc-500">
                      <div>$ rag.process(document.pdf)</div>
                      <div className="text-zinc-600">parsing... [████████████] 100%</div>
                      <div className="text-zinc-600">indexing... [████████████] 100%</div>
                      <div>$ ready for queries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical features grid */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-400 font-mono text-xs">
              <Cpu className="w-3 h-3 mr-1" />
              SYSTEM.MODULES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-zinc-100 mb-4">
              CORE COMPONENTS
            </h2>
            <p className="text-zinc-400 font-mono text-sm max-w-2xl mx-auto">
              Engineered for high-performance document intelligence operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <FileText className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">PARSER.ENGINE</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  Multi-format document extraction with OCR capabilities and structured data mapping
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <MessageSquare className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">QUERY.INTERFACE</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  Natural language processing with context-aware response generation and memory persistence
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <Database className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">VECTOR.STORE</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  High-dimensional embedding storage with semantic similarity search algorithms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <Network className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">RETRIEVAL.SYSTEM</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  Optimized relevance scoring with multi-stage filtering and ranking mechanisms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <Shield className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">SECURITY.LAYER</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  End-to-end encryption with access control and audit logging capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4 text-zinc-400" />
                </div>
                <CardTitle className="text-zinc-100 font-mono text-sm">SESSION.MANAGER</CardTitle>
                <CardDescription className="text-zinc-500 font-mono text-xs">
                  Persistent conversation state with contextual memory and history management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical CTA section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800 p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-zinc-100">
                  INITIALIZE SYSTEM
                </h2>
                <p className="text-zinc-400 font-mono text-sm max-w-2xl mx-auto">
                  Deploy advanced document intelligence infrastructure with enterprise-grade processing capabilities
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-mono">
                  <Code className="w-4 h-4 mr-2" />
                  <a href="/deploy">EXECUTE DEPLOYMENT</a>
                </Button>
                <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 font-mono">
                  <Terminal className="w-4 h-4 mr-2" />
                  <a href="/chat">ACCESS INTERFACE</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical footer */}
      <footer className="relative z-10 bg-zinc-950 border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <Terminal className="w-3 h-3 text-zinc-400" />
                </div>
                <div>
                  <h3 className="font-mono text-zinc-100 text-sm">RAG.CORE</h3>
                  <p className="text-xs text-zinc-500 font-mono">ENTERPRISE</p>
                </div>
              </div>
              <p className="text-zinc-500 font-mono text-xs leading-relaxed">
                Advanced document intelligence framework for enterprise-scale knowledge management systems
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-mono text-zinc-400 text-xs">MODULES</h4>
              <ul className="space-y-1 text-zinc-600 font-mono text-xs">
                <li className="hover:text-zinc-400 cursor-pointer">parser.engine</li>
                <li className="hover:text-zinc-400 cursor-pointer">query.interface</li>
                <li className="hover:text-zinc-400 cursor-pointer">vector.store</li>
                <li className="hover:text-zinc-400 cursor-pointer">security.layer</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-mono text-zinc-400 text-xs">RESOURCES</h4>
              <ul className="space-y-1 text-zinc-600 font-mono text-xs">
                <li className="hover:text-zinc-400 cursor-pointer">api.documentation</li>
                <li className="hover:text-zinc-400 cursor-pointer">integration.guide</li>
                <li className="hover:text-zinc-400 cursor-pointer">support.channel</li>
                <li className="hover:text-zinc-400 cursor-pointer">status.monitor</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
            <p className="text-zinc-600 font-mono text-xs">
              © 2024 RAG.CORE | Enterprise Document Intelligence Framework
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
