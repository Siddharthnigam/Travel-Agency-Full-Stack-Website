import React, { useRef } from 'react';
import videoFile from '../../assets/earth.mp4';

const WhatsAppAgencyBento = () => {
  const containerRef = useRef(null);

  const addToRefs = (el) => {
    // Simplified ref callback - no animation setup needed
    return el;
  };

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: 'white',
        perspective: '1000px'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <h1 style={{
          fontSize: 'clamp(20px, 5vw, 28px)',
          fontWeight: '600',
          margin: 0
        }}>WhatsApp Chatbot Agency</h1>
      </div>

      {/* Main Grid - Responsive */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Left Column */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {/* Expert Setup */}
          <div 
            style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '25px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #333',
              backdropFilter: 'blur(20px)',
              minHeight: '70px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: 'clamp(14px, 4vw, 18px)', fontWeight: '600' }}>Expert Setup</span>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#25d366',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              ✅
            </div>
          </div>

          {/* 24/7 Management */}
          <div 
            style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '25px',
              padding: '20px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '150px',
              border: '1px solid #333',
              backdropFilter: 'blur(20px)',
              cursor: 'pointer'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: 'clamp(40px, 8vw, 60px)',
                height: 'clamp(40px, 8vw, 60px)',
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                borderRadius: '15px',
                animation: 'rotateLeft 3s linear infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(16px, 4vw, 24px)'
              }}
            >
              🔄
            </div>
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <span style={{ color: '#25d366', fontSize: 'clamp(16px, 4vw, 20px)' }}>🕒</span>
              <span style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 16px)' }}>24/7 Management</span>
            </div>
          </div>

          {/* Client Success */}
          <div 
            style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '25px',
              padding: '20px',
              textAlign: 'left',
              border: '1px solid #333',
              backdropFilter: 'blur(20px)',
              minHeight: '120px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              fontSize: 'clamp(16px, 4vw, 24px)',
              fontWeight: '300',
              lineHeight: '1.3',
              marginBottom: '15px'
            }}>
              "Increased our<br />
              conversions by<br />
              300% with their<br />
              WhatsApp bot"
            </div>
            <div style={{
              fontSize: 'clamp(10px, 2.5vw, 12px)',
              color: '#888',
              marginTop: '10px'
            }}>
              Client testimonial
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {/* Top Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Custom Bots */}
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '120px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: 'clamp(40px, 8vw, 60px)',
                height: 'clamp(40px, 8vw, 60px)',
                border: '2px solid #25d366',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(12px, 3vw, 16px)',
                fontWeight: '600',
                color: '#25d366'
              }}>
                AI
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: '600', marginBottom: '2px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Custom Bots</div>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>For Your Business</div>
              </div>
            </div>

            {/* API Integration */}
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '120px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: 'clamp(30px, 6vw, 50px)',
                height: 'clamp(25px, 5vw, 40px)',
                backgroundColor: '#25d366',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 3.5vw, 20px)'
              }}>
                🔗
              </div>
              <div style={{
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                API Setup
              </div>
            </div>
          </div>

          {/* Center Video Display */}
          <div style={{
            backgroundColor: '#1c1c1e',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: 'clamp(200px, 40vw, 300px)',
            overflow: 'hidden',
            border: '1px solid #333',
            backdropFilter: 'blur(20px)'
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            >
              <source src={videoFile} type="video/mp4" />
            </video>
            
            {/* Fallback content */}
            <div style={{
              width: 'clamp(100px, 30vw, 200px)',
              height: 'clamp(100px, 30vw, 200px)',
              position: 'absolute',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#25d366',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
              <div style={{
                fontSize: 'clamp(24px, 8vw, 48px)',
                color: 'white'
              }}>
                💬
              </div>
            </div>
            
            {/* Overlay text */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: '8px 12px',
              borderRadius: '15px',
              fontSize: 'clamp(10px, 2.5vw, 14px)',
              fontWeight: '600',
              border: '1px solid #333'
            }}>
              WhatsApp Bot in Action
            </div>
          </div>

          {/* Bottom Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '20px' }}>
            {/* Lead Generation */}
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '100px',
                cursor: 'pointer'
              }}
            >
              <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                <div style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 14px)' }}>Lead</div>
                <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>Generation</div>
              </div>
              <div style={{ color: '#25d366', fontSize: 'clamp(14px, 3.5vw, 18px)', textAlign: 'center' }}>🎯</div>
              <div style={{ marginTop: '10px', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600', textAlign: 'center' }}>Automated</div>
            </div>

            {/* ROI Tracking */}
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                textAlign: 'center',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: 'clamp(30px, 6vw, 50px)',
                height: 'clamp(30px, 6vw, 50px)',
                backgroundColor: '#25d366',
                borderRadius: '50%',
                margin: '0 auto 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 3.5vw, 20px)'
              }}>
                📈
              </div>
              <div style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 14px)' }}>ROI Tracking</div>
            </div>

            {/* Success Rate */}
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '100px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                fontSize: 'clamp(18px, 5vw, 24px)',
                fontWeight: '700',
                marginBottom: '5px',
                color: '#25d366'
              }}>
                98%
              </div>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '5px', color: '#888' }}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {/* Strategy & Consulting */}
          <div 
            style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '25px',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid #333',
              backdropFilter: 'blur(20px)',
              minHeight: '100px',
              cursor: 'pointer'
            }}
          >
            <div 
              style={{
                width: 'clamp(40px, 8vw, 60px)',
                height: 'clamp(40px, 8vw, 60px)',
                background: 'conic-gradient(from 0deg, #25d366, #128c7e, #075e54, #34b7f1)',
                borderRadius: '50%',
                margin: '0 auto 15px',
                animation: 'rotateRight 4s linear infinite'
              }}
            />
            <div style={{ fontWeight: '600', fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>Strategy & Consulting</div>
          </div>

          {/* Full Service Management */}
          <div 
            style={{
              backgroundColor: '#1c1c1e',
              borderRadius: '25px',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid #333',
              backdropFilter: 'blur(20px)',
              minHeight: '120px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              fontSize: 'clamp(12px, 3vw, 14px)',
              color: '#888',
              marginBottom: '15px'
            }}>
              Full Service<br />Management
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#25d366',
              borderRadius: '50%',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(12px, 3vw, 18px)'
            }}>
              🎯
            </div>
          </div>

          {/* Compliance and Training */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                textAlign: 'center',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '100px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: 'clamp(25px, 5vw, 40px)',
                height: 'clamp(25px, 5vw, 40px)',
                backgroundColor: '#25d366',
                borderRadius: '8px',
                margin: '0 auto 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(12px, 3vw, 18px)'
              }}>
                ✅
              </div>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600' }}>WhatsApp Compliance</div>
            </div>

            <div 
              style={{
                backgroundColor: '#1c1c1e',
                borderRadius: '25px',
                padding: '15px',
                textAlign: 'center',
                border: '1px solid #333',
                backdropFilter: 'blur(20px)',
                minHeight: '100px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: 'clamp(25px, 5vw, 40px)',
                height: 'clamp(25px, 5vw, 40px)',
                backgroundColor: '#128c7e',
                borderRadius: '8px',
                margin: '0 auto 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(12px, 3vw, 18px)'
              }}>
                🎓
              </div>
              <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600' }}>Team Training</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Only for the rotating elements */}
      <style jsx>{`
        @keyframes rotateLeft {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotateRight {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppAgencyBento;
