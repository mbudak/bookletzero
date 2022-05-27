import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProtectedPage() {    
    const { data: session, status } = useSession();
    const loading = status === "loading"
    const [content, setContent] = useState()

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/api/example/protected")
          const json = await res.json()
          if (json.content) {
            setContent(json.content)
          }
        }
        fetchData()
      }, [session])

      

    if (!session) {
        return (
          
            <div>
              <h1>You aren't signed in, please sign in first</h1>
            </div>
          
        );
      }
      return (
        
          <div>
            <h1> Protected Page</h1>
            <hr/>
            <pre>
                {content}
            </pre>
            <hr/>
          </div>
        
      );
}
