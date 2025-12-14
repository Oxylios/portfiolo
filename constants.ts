import { Linkedin, Instagram, Mail, LayoutGrid } from 'lucide-react';

// ==========================================
// GUIDE DE MODIFICATION (HOW TO EDIT)
// ==========================================
// C'est ici que vous pouvez changer le contenu du site.
// Modifiez simplement les valeurs entre les guillemets.

export const PROFILE_DATA = {
  // 1. L'image de profil
  // POUR UNE PHOTO LOCALE :
  // 1. Mettez votre fichier image (ex: "photo.jpg") dans le même dossier que ce fichier.
  // 2. Remplacez l'URL ci-dessous par "./photo.jpg" (avec le point et le slash devant).
  avatarUrl: "./icon.JPEG", 
  
  // 2. Le Nom principal
  name: "Ferrier Quentin",
  
  // 3. Le petit badge sous le nom
  role: "BUT Mesure Physique",
  
  // 4. La biographie
  bio: "Amis • Famille • Jeux Vidéos• Science",
  
  // 5. Les liens sociaux
  // Changez les URLs pour diriger vers vos propres profils
  socials: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      // Note: Il est important de mettre https:// devant les liens
      url: 'https://www.linkedin.com/in/quentin-ferrier',
      icon: Linkedin,
      bgColor: 'bg-[#0077b5]', 
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/qt1n.f/',
      icon: Instagram,
      // Dégradé Instagram
      bgColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:quentin.ferrier@orange.fr',
      icon: Mail,
      bgColor: 'bg-[#0EA5E9]', // Bleu ciel
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      url: 'https://github.com',
      icon: LayoutGrid,
      bgColor: 'bg-[#1F2937]', // Gris foncé/Noir
    }
  ]
};