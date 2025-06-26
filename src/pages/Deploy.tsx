
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Terminal, Database, Cpu, Network, Shield, Zap, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { useState } from "react";

const Deploy = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [deploying, setDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<{[key: string]: 'pending' | 'processing' | 'complete' | 'error'}>({});

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
    
    // Initialize status for new files
    selectedFiles.forEach(file => {
      setDeploymentStatus(prev => ({ ...prev, [file.name]: 'pending' }));
    });
  };

  const handleDeploy = async () => {
    setDeploying(true);
    
    for (const file of files) {
      setDeploymentStatus(prev => ({ ...prev, [file.name]: 'processing' }));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error
      const success = Math.random() > 0.2;
      setDeploymentStatus(prev => ({ 
        ...prev, 
        [file.name]: success ? 'complete' : 'error' 
      }));
    }
    
    setDeploying(false);
  };

  const removeFile = (index: number) => {
    const fileToRemove = files[index];
    setFiles(prev => prev.filter((_, i) => i !== index));
    setDeploymentStatus(prev => {
      const newStatus = { ...prev };
      delete newStatus[fileToRemove.name];
      return newStatus;
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-zinc-500" />;
      case 'processing': return <Cpu className="w-4 h-4 text-zinc-400 animate-pulse-subtle" />;
      case 'complete': return <CheckCircle className="w-4 h-4 text-zinc-100" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Technical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/6 w-px h-24 bg-zinc-800/50"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-px bg-zinc-700/50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-16 bg-zinc-800/50"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-px bg-zinc-700/50"></div>
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
                <h1 className="text-lg font-mono text-zinc-100">RAG.DEPLOY</h1>
                <p className="text-xs text-zinc-500 font-mono">v2.4.1</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 font-mono text-sm">
                <a href="/">RETURN</a>
              </Button>
              <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 font-mono text-sm">
                <a href="/chat">QUERY.INTERFACE</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Technical header */}
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Badge variant="outline" className="border-zinc-700 text-zinc-400 font-mono text-xs">
                <Database className="w-3 h-3 mr-1" />
                DEPLOYMENT.PROTOCOL
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-zinc-100 mb-4">
              DOCUMENT INGESTION
            </h1>
            <p className="text-zinc-400 font-mono text-sm max-w-2xl">
              Initialize vector database with document corpus for retrieval-augmented generation processing
            </p>
          </div>

          {/* Deployment grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column - Upload interface */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload zone */}
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-zinc-100 font-mono text-sm flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    DOCUMENT.UPLOAD.MODULE
                  </CardTitle>
                  <CardDescription className="text-zinc-500 font-mono text-xs">
                    Multi-format document ingestion with OCR preprocessing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-zinc-800 p-8 text-center tech-hover">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.txt,.docx"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 border border-zinc-700 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-zinc-400" />
                        </div>
                        <div className="font-mono">
                          <p className="text-zinc-100 text-sm">DRAG.DROP.PROTOCOL</p>
                          <p className="text-zinc-500 text-xs mt-1">PDF | TXT | DOCX | MAX 10MB</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* File processing queue */}
              {files.length > 0 && (
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-100 font-mono text-sm flex items-center">
                      <Network className="w-4 h-4 mr-2" />
                      PROCESSING.QUEUE [{files.length}]
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-zinc-800/50 border border-zinc-700">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(deploymentStatus[file.name] || 'pending')}
                            <div className="font-mono text-xs">
                              <p className="text-zinc-100">{file.name}</p>
                              <p className="text-zinc-500">{(file.size / 1024 / 1024).toFixed(2)}MB</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono text-zinc-400">
                              {deploymentStatus[file.name]?.toUpperCase() || 'PENDING'}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 font-mono text-xs h-6 px-2"
                            >
                              REMOVE
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Deploy button */}
              {files.length > 0 && (
                <div className="flex justify-center">
                  <Button
                    onClick={handleDeploy}
                    disabled={deploying}
                    className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-mono text-sm px-8"
                  >
                    {deploying ? (
                      <>
                        <Cpu className="w-4 h-4 mr-2 animate-pulse-subtle" />
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        INITIALIZE.DEPLOYMENT
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* Right column - System status */}
            <div className="space-y-6">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-100 font-mono text-sm flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    SYSTEM.STATUS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">VECTOR.DB</span>
                    <span className="text-zinc-100">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">PARSER.ENGINE</span>
                    <span className="text-zinc-100">READY</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">EMBEDDING.API</span>
                    <span className="text-zinc-100">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">SECURITY.LAYER</span>
                    <span className="text-zinc-100">ENABLED</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-100 font-mono text-sm">PROCESSING.PIPELINE</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zinc-100"></div>
                      <span className="text-zinc-400">DOCUMENT.PARSE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 border border-zinc-600"></div>
                      <span className="text-zinc-600">TEXT.EXTRACTION</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 border border-zinc-600"></div>
                      <span className="text-zinc-600">CHUNK.SEGMENTATION</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 border border-zinc-600"></div>
                      <span className="text-zinc-600">VECTOR.EMBEDDING</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 border border-zinc-600"></div>
                      <span className="text-zinc-600">INDEX.STORAGE</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
