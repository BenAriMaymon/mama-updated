import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Simple logging for debugging connection
console.log("Firebase initialized");

export async function submitLead(lead: { name: string; email: string; phone: string; message: string; language: string }) {
  try {
    const leadsRef = collection(db, 'leads');
    const docRef = await addDoc(leadsRef, {
      ...lead,
      createdAt: serverTimestamp(),
    });
    
    // Attempt notification via ntfy.sh (Public service, can be changed to a private topic)
    // We use a unique topic based on the App ID or similar to keep it somewhat private
    const ntfyTopic = `kpm_law_leads_${firebaseConfig.projectId}`;
    try {
      await fetch(`https://ntfy.sh/${ntfyTopic}`, {
        method: 'POST',
        body: `New Lead: ${lead.name} (${lead.phone})\nMessage: ${lead.message.substring(0, 50)}...`,
        headers: {
          'Title': 'New Law Office Inquiry',
          'Priority': 'high',
          'Tags': 'incoming_envelope'
        }
      });
    } catch (ntfyError) {
      console.error("Failed to send notification:", ntfyError);
    }

    return docRef.id;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
}
