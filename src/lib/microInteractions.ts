
// Micro-interactions for UI elements

export const buttonEffects = {
  // Button ripple effect
  createRipple: (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];
    
    if (ripple) {
      ripple.remove();
    }
    
    button.appendChild(circle);
  }
};

// Focus handling 
export const focusHandling = {
  // Add focus visible class when keyboard navigation is used
  handleFocusVisible: () => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    };
    
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-user');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }
};

// Scroll interactions
export const scrollEffects = {
  // Parallax effect based on scroll position
  applyParallax: (element: HTMLElement, speed: number = 0.5) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },
  
  // Reveal elements on scroll
  revealOnScroll: (elements: NodeListOf<Element>, threshold: number = 0.1) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold });
    
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  },
  
  // Show progress bar on scroll
  showScrollProgress: (progressBar: HTMLElement) => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      progressBar.style.width = scrolled + '%';
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }
};

// Hover interactions
export const hoverEffects = {
  // Magnetic effect (elements moves towards cursor)
  magneticEffect: (element: HTMLElement, strength: number = 30) => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < 100) {
        const x = distanceX * (strength / 100);
        const y = distanceY * (strength / 100);
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        element.style.transform = 'translate(0, 0)';
      }
    };
    
    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },
  
  // Highlight effect on hover
  addHighlightEffect: (element: HTMLElement) => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      
      element.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`;
    };
    
    const handleMouseLeave = () => {
      element.style.background = 'none';
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }
};

// Export all interactions
export default {
  buttonEffects,
  focusHandling,
  scrollEffects,
  hoverEffects
};
