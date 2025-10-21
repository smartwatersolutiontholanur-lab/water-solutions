import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Developer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-card border border-border rounded-lg p-8 shadow-2xl"
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          className="h-1 w-24 bg-primary mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Hi, I'm <span className="font-bold text-foreground">Varun</span>, the creator behind{" "}
            <span className="font-bold text-primary">CRAFT BYTE</span>.
          </p>

          <p className="text-lg text-muted-foreground">
            I'm the developer of the <span className="font-bold text-foreground">Smart Water Solution</span> website.
          </p>

          <p className="text-lg text-muted-foreground">
            We build apps, websites, automation solutions, and designs with precision and creativity.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-6 pb-2"
          >
            <p className="text-sm text-muted-foreground font-mono">
              Developer ID: CV-2025-1021-001
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
            <Button onClick={() => navigate("/")} variant="default" size="lg">
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Developer;
