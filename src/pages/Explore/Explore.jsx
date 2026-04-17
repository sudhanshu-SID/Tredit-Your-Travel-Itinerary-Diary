import React, { useState } from 'react';
import Icon from '../../components/icons/Icon';

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState('Popular');

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 border-b border-surface-container">
        <div className="flex items-center gap-2">
          <Icon name="travel_explore" className="text-primary text-3xl" />
          <h1 className="text-xl font-extrabold tracking-tight text-on-surface font-headline">Tredit</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <Icon name="notifications" className="text-on-surface-variant" />
          </button>
          <img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7HeuMU_tq5M1wKqnVLGC5aevtiw0kG0WN-e8xVwrZKiBgGVPxmjK-aqZvY8ihUrQ8fO3wYVoBTCe4F5jbTJ0viALlIwWxr3SjQlYfdSsplTEelj3cWpRTz_SbPGtaSwohyYIkdqqYxV5Q_LPtOjBRyXCLoAcF8dtcRuDyy08SA5AMk0qdKjeTD6RXmRMXSQ-9YyT2HAJ7t026Y2bDoRYTemFbAW3dxRWKUbWU65Xjl1QoFilkgPZsa2Zr8FBbGkVrXznqyDt-j1s" />
        </div>
      </header>

      <main className="pt-24 pb-32 max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight">Explore Journeys</h2>
            <p className="text-on-surface-variant text-sm font-medium">Find your next adventure through others' eyes.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-sm border border-outline-variant/30 flex-nowrap">
            <div className="flex-1 flex items-center gap-3 pl-4">
              <Icon name="search" className="text-outline shrink-0" />
              <input className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium placeholder:text-outline/80" placeholder="Search destinations..." type="text" />
            </div>
            <button className="bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-xs shrink-0">Search</button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-6 px-6">
            {['Popular', 'Nature', 'Culinary', 'Luxury', 'Budget'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-secondary text-on-secondary shadow-md shadow-secondary/20'
                    : 'bg-white border border-outline-variant/30 text-on-surface'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry-grid">
          {/* Item 1 */}
          <div className="masonry-item bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 group cursor-pointer">
            <div className="relative">
              <img alt="Patagonia" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JNeDTsLKMFh8Xpwim8hyVoqfMB2cA2e0TQ3bwpbV45_vIWUz-PgJJBKNGEWS0S5PZ3dWbSf3oB1g18nBGP2Heur9DKUl2pAP0M5Ya4nXYZ7u7vta1AmiPkMbau6oNzM0gJtZES7dioO1dJKQ5mRoniyP6OHZjoN9514YPgWaPvMJZCJZMHrTT77E1JjGSauAMjIcsnKJjEM0X0dSpQq4i-KLFbEm1SqD6B1-FJ0iNx2yZDwjHoCQQp0cMT0i574vq7EPV0-R5-Q" />
              <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider">Nature</div>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="font-bold text-sm leading-tight text-on-surface">The Patagonia Circuit: A Raw Wilderness Diary</h4>
              <div className="flex items-center gap-2">
                <img alt="User" className="w-5 h-5 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxxdT0okJ_LB9OX9zG7X9ZJ77BTG4jqN10pQtsEnhJvlGcDcTm64-nWHJQ8wApmDXFEvb7zwu52J7r8A_FXc-yKAfp0SxM-t0lp6aDBkvSHWosmOHJ6iIz4EWQtyvmXbCkglkfrCPes31rrpkuI2jaC73Gi-98DrgY1McjgM9zE7Ym4KTuwIzrNNer_-G0K394YkMx-9SNYLRTGO-RxsIvMqocECvKan_wDvOrYNvTSJBL11O763MBvvhbDgO7Z487kWmUtl2AHno" />
                <span className="text-[10px] font-medium text-on-surface-variant">Isabella Scott</span>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="masonry-item bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 group cursor-pointer">
            <div className="relative">
              <img alt="Kyoto" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpP0-P5vxsZdzLt4YRXetNKxGgP1qhqjWzS7VmVQqgOhaV3csY5vi4y6BgYPps0m3-ZpDt-4BEYZGSTz2eg4vxFHzRodrbmhEOyrlgmnP-seJ3NzXk84CSzyUYIWr0CA_nuChUvx1puJjz6sDSwmwQawOEpP-qoMNZdq73VnqVd5LHygWf274eAZixfeNA_j4_1LzC5nIYJAdAbeYug1kLKc6uAmEywPlySshfuogOqsT5XQicHGKDChowFCgGrJLLkK_TmImrxH8" />
              <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider">Food</div>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="font-bold text-sm leading-tight text-on-surface">Kyoto Hidden Gems: A Chef's Private Tour</h4>
              <div className="flex items-center gap-2">
                <img alt="User" className="w-5 h-5 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgzKZN-JO4xT7oQHpMrIDUzYUxW0NULlIgkIpNojIa89NynMVcSKuzgs4ZAc40napQQraLfrVXhWS7TkmdHx5GLi3rilybHhaG26lAaCVyN2CYAW0IyME0SLIWuhZsmTh0VXb9grTC614qFRiVme6hX4JSDCIQWy5pkAofr2vIuF6Jpe5yTTrzBiQOYuO-j-jpl9hL2Uz5JG-N-E5ALN7rGEhDR8jXqTYTroMjnMytmZMooxusDxs9DARMadzKB8j8D51RqT1kvUc" />
                <span className="text-[10px] font-medium text-on-surface-variant">Kenji Nakamura</span>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="masonry-item bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 group cursor-pointer">
            <div className="relative">
              <img alt="London" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv08nyRrfanwxrk4qaCB9DXlphfJqz_7FuAjULxzJGPzQA90NWDgsrTCpjwM2evPkIm4Ha-IcRoAt2BKrvxM_GVcCLn4ckC_5iH9JhccFrRzrh1druZ6FfM7W3DlQTI-vvyCs4ThI5secDf4DdQUBMfZgqviUTmWdYPwha8qmXtVeMqf_bEQafjt30DHyJuInYSB-dp9rllGeXEtwZdrEGmyXdLxtD95-om1UE1JCM0eEWl67lBLdBbEfMFGDN4z1zdFCx-xi29YA" />
              <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider">Culture</div>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="font-bold text-sm leading-tight text-on-surface">London After Dark: Jazz &amp; History</h4>
              <div className="flex items-center gap-2">
                <img alt="User" className="w-5 h-5 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRPRgSbJHQ6FgvV46aKNJk5Ou-wU4XwVUKrj-shS1ntw3gC9KvukuapDjXc811jmbEEv_TOfvXojc1Gt0M1-5JD9-pdZzf8mM-WiM7tqvhbWIm_HGYcp5F6uutEjBICwnV5VlPKLxLTFIUJEGjaHEzqj8zF7r8J-Q3jqfG20y6FvjZoEJy1qmnyBDWbQZxsgjIndET3pVRrYVXp9L0YSzEGKR8y3E-skR9pETwPCVKbH-rwoNnQsYbyjEYdghAzlvJR7ED3wLfDVc" />
                <span className="text-[10px] font-medium text-on-surface-variant">David Miller</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
