import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SocialMedia({selectedJob}) {
  return (
    <div>
          <Box sx={{ marginBottom: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  <strong>Social Media:</strong>
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  {selectedJob.industryLinkedIn && (
                    <Link
                      href={selectedJob.industryLinkedIn}
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaLinkedin
                        size={24}
                        color="#0A66C2"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                  {selectedJob.industryTwitter && (
                    <Link
                      href={selectedJob.industryTwitter}
                      target="_blank"
                      rel="noopener"
                      aria-label="Twitter"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaTwitter
                        size={24}
                        color="#1DA1F2"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                  {selectedJob.industryFacebook && (
                    <Link
                      href={selectedJob.industryFacebook}
                      target="_blank"
                      rel="noopener"
                      aria-label="Facebook"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaFacebook
                        size={24}
                        color="#1877F2"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                  {selectedJob.industryPinterest && (
                    <Link
                      href={selectedJob.industryPinterest}
                      target="_blank"
                      rel="noopener"
                      aria-label="Pinterest"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaPinterest
                        size={24}
                        color="#BD081C"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                  {selectedJob.industryInstagram && (
                    <Link
                      href={selectedJob.industryInstagram}
                      target="_blank"
                      rel="noopener"
                      aria-label="Instagram"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaInstagram
                        size={24}
                        color="#C13584"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                  {selectedJob.industryWebSite && (
                    <Link
                      href={selectedJob.industryWebSite}
                      target="_blank"
                      rel="noopener"
                      aria-label="Website"
                      sx={{ transition: 'transform 0.2s' }}
                    >
                      <FaGlobe
                        size={24}
                        color="#4CAF50"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = 'scale(1.2)')
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = 'scale(1)')
                        }
                      />
                    </Link>
                  )}
                </Stack>
              </Box>
    </div>
  )
}

export default SocialMedia