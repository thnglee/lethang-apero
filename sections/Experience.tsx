'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem, Experience as ExperienceType } from '@/components/experience/ExperienceItem';

const experiences: ExperienceType[] = [
    {
        id: '01',
        role: 'Growth & Business Development',
        company: 'ECOMUP',
        period: '01/2026 – Present',
        location: 'Hanoi',
        description: 'Conducted market research and competitive analysis across product categories, identifying high-potential opportunities and validating demand before committing resources. Managed performance marketing campaigns across Google Ads and Facebook Ads, optimizing bid strategies, audience targeting, and creatives to hit ROAS targets. Built data dashboards to drive data-informed decisions on scaling priorities.',
        skills: ['Market Research', 'Performance Marketing', 'Go-to-Market', 'Data-driven Decision Making'],
        links: [],
        media: [
            { type: 'image', src: '/ecomup/ecomup.jpg' }
        ]
    },
    {
        id: '02',
        role: 'E-commerce Operations & Growth (Team Lead)',
        company: 'Tai Chinh Xanh JSC.',
        period: '09/2025 – 12/2025',
        location: 'Ha Noi',
        description: 'Led day-to-day operations for the "Softie" brand as a founding team member, keeping marketing, operations, and finance aligned on growth targets. Managed Facebook Ads campaigns, briefing ad concepts and iterating on underperforming creatives to improve ROAS. Analyzed campaign and sales data to find cost-reduction and revenue-growth opportunities.',
        skills: ['Team Leadership', 'Startup Operations', 'Facebook Ads', 'Revenue Analysis'],
        links: [
            { text: 'Website', url: 'https://www.taichinhxanh.info/' },
            { text: 'Article', url: 'https://tienphong.vn/nhung-ong-chu-sinh-vien-khoi-nghiep-xanh-post1802928.tpo?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeGkoYZZsUdFcfhb7no7_bJsMJtXoL5ZxRInEbC4s2ldDWgwgD3kJzRwZS1XQ_aem_ZkNh2DnUVBg-S98zMQdueQ' }
        ],
        media: [
            { type: 'image', src: '/tcx/tcx.jpg' },
            { type: 'image', src: '/tcx/sof.jpg' }
        ]
    },
    {
        id: '03',
        role: 'Batch-1 Member — Growth & Business Development',
        company: 'NextStart Incubator — NextTech',
        period: '06/2025 – 10/2025',
        location: 'Hanoi',
        description: 'Selected into the inaugural cohort of NextTech\'s startup incubator. Worked with a team of talented software engineers to build and ship an MVP for a D2C AI companion device. Conducted market research, developed go-to-market strategies, and pitched growth plans to mentors and industry experts. Collaborated closely with mentors to validate assumptions and stay on the right path toward product-market fit.',
        skills: ['Startup Building', 'Market Research', 'MVP Development', 'Product-Market Fit'],
        links: [
            { text: 'Article', url: 'https://trading.vietcap.com.vn/ai-news/post-detail/nextstart-incubator-vuon-uom-tai-nang-khoi-nghiep-chao-don-khoa-dau-tien' },
            { text: 'Project', url: 'https://nextcapy.studio' }
        ],
        media: [
            { type: 'image', src: '/nextstart/ns.jpg' },
            { type: 'image', src: '/nextstart/nss.jpg' }
        ]
    },
    {
        id: '04',
        role: 'Growth Analyst',
        company: 'Thinkmay CO.,LTD',
        period: '06/2025 – 09/2025',
        location: 'Hanoi',
        description: 'Worked directly with the CEO to define growth priorities and align marketing initiatives with product positioning goals. Conducted user research and landing page analysis to identify UX friction points and improve conversion rates through A/B testing. Managed content production from concept to final asset, bridging marketing strategy and technical execution.',
        skills: ['Growth Strategy', 'User Research', 'Marketing-Tech Integration'],
        links: [
            { text: 'Website', url: 'https://thinkmay.net/' },
            { text: 'Tiktok', url: 'https://www.tiktok.com/@thangoncloud' },
        ],
        media: [
            { type: 'image', src: '/thinkmay/thinkmay-1.png' },
            { type: 'image', src: '/thinkmay/tmay.png' }
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-obsidian text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,164,126,0.05),transparent_40%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                        Professional <span className="font-serif italic text-gold-accent">Experience</span>
                    </h2>
                    <p className="text-text-body/60 max-w-lg text-lg">
                        A timeline of building, leading, and growing ventures.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-16">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
