
import { ParticleButton } from "@/components/ui/particle-button"

function ParticleButtonDemo() {
    return (
        <div className="flex flex-col items-center space-y-4 p-8">
            <h2 className="text-2xl font-bold mb-4">Particle Button Examples</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ParticleButton 
                    successDuration={1000} 
                    variant="default"
                    onSuccess={() => console.log("Default button clicked!")}
                >
                    Default Button
                </ParticleButton>
                
                <ParticleButton 
                    successDuration={1000} 
                    variant="destructive"
                    onSuccess={() => console.log("Destructive button clicked!")}
                >
                    Destructive Button
                </ParticleButton>
                
                <ParticleButton 
                    successDuration={1000} 
                    variant="outline"
                    onSuccess={() => console.log("Outline button clicked!")}
                >
                    Outline Button
                </ParticleButton>
                
                <ParticleButton 
                    successDuration={1000} 
                    variant="secondary"
                    onSuccess={() => console.log("Secondary button clicked!")}
                >
                    Secondary Button
                </ParticleButton>
                
                <ParticleButton 
                    successDuration={1000} 
                    variant="ghost"
                    onSuccess={() => console.log("Ghost button clicked!")}
                >
                    Ghost Button
                </ParticleButton>
                
                <ParticleButton 
                    successDuration={1000} 
                    variant="link"
                    onSuccess={() => console.log("Link button clicked!")}
                >
                    Link Button
                </ParticleButton>
            </div>
        </div>
    )
}

export { ParticleButtonDemo }
