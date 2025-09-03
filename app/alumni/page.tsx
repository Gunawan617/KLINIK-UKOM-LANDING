"use client";

import React, { useState } from 'react';
import { Search, Grid, List, Filter, Heart, Share2, Download, Eye } from 'lucide-react';

// Data dummy alumni
const alumniData = [
  { id: 1, name: "Ahmad Rizki", batch: "2020", major: "Teknik Informatika", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { id: 2, name: "Siti Nurhaliza", batch: "2019", major: "Manajemen", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" },
  { id: 3, name: "Budi Santoso", batch: "2021", major: "Teknik Sipil", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { id: 4, name: "Dewi Sartika", batch: "2020", major: "Akuntansi", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
  { id: 5, name: "Eko Prasetyo", batch: "2018", major: "Teknik Mesin", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
  { id: 6, name: "Rina Melati", batch: "2021", major: "Psikologi", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" },
  { id: 7, name: "Faisal Rahman", batch: "2019", major: "Ekonomi", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face" },
  { id: 8, name: "Maya Sari", batch: "2020", major: "Desain Grafis", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face" },
  { id: 9, name: "Doni Kusuma", batch: "2018", major: "Teknik Elektro", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
  { id: 10, name: "Lina Wijaya", batch: "2021", major: "Farmasi", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { id: 11, name: "Arif Hidayat", batch: "2019", major: "Hukum", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" },
  { id: 12, name: "Indah Permata", batch: "2020", major: "Komunikasi", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" }
];

const AlumniGallery = () => {
  const [viewMode, setViewMode] = useState('masonry');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.major.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = selectedBatch === '' || alumni.batch === selectedBatch;
    return matchesSearch && matchesBatch;
  });

  const uniqueBatches = [...new Set(alumniData.map(alumni => alumni.batch))].sort();

  // Layout 1: Masonry Grid (Pinterest-style)
  const MasonryLayout = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {filteredAlumni.map((alumni, index) => (
        <div key={alumni.id} className="break-inside-avoid mb-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group">
            <div className="relative overflow-hidden">
              <img 
                src={alumni.photo} 
                alt={alumni.name}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ height: `${200 + (index % 3) * 50}px` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{alumni.name}</h3>
              <p className="text-blue-600 font-medium text-sm">{alumni.major}</p>
              <p className="text-gray-500 text-sm">Angkatan {alumni.batch}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Layout 2: Hexagonal Grid
  const HexagonLayout = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {filteredAlumni.map((alumni) => (
        <div key={alumni.id} className="relative group">
          <div className="relative w-32 h-32 mx-auto" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 p-1" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <div className="w-full h-full bg-white p-1" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <img 
                  src={alumni.photo} 
                  alt={alumni.name}
                  className="w-full h-full object-cover"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <div className="text-white text-center p-2">
                <p className="font-bold text-sm">{alumni.name}</p>
                <p className="text-xs">{alumni.batch}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium text-sm text-gray-800">{alumni.name}</p>
            <p className="text-xs text-gray-500">{alumni.major}</p>
          </div>
        </div>
      ))}
    </div>
  );

  // Layout 3: Card Grid dengan Hover Effects
  const CardLayout = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredAlumni.map((alumni) => (
        <div key={alumni.id} className="group relative">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative mb-4">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-blue-300 transition-all duration-300">
                <img 
                  src={alumni.photo} 
                  alt={alumni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                {alumni.batch}
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{alumni.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">{alumni.major}</p>
              <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Layout 4: Circular/Bubble Layout
  const BubbleLayout = () => (
    <div className="flex flex-wrap justify-center gap-4 p-8">
      {filteredAlumni.map((alumni, index) => {
        const sizes = ['w-20 h-20', 'w-24 h-24', 'w-28 h-28', 'w-20 h-20'];
        const size = sizes[index % sizes.length];
        return (
          <div key={alumni.id} className="group relative">
            <div className={`${size} rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer ring-4 ring-transparent hover:ring-blue-300`}>
              <img 
                src={alumni.photo} 
                alt={alumni.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center text-xs">
                <p className="font-bold">{alumni.name}</p>
                <p>{alumni.batch}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Galeri Alumni
              </h1>
              <p className="text-gray-600 mt-1">Temukan teman-teman alumni anda disini</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Cari nama atau jurusan..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filter Angkatan */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
              >
                <option value="">Semua Angkatan</option>
                {uniqueBatches.map(batch => (
                  <option key={batch} value={batch}>Angkatan {batch}</option>
                ))}
              </select>
              
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'masonry' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'cards' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('hexagon')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'hexagon' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  <Filter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('bubble')}
                  className={`p-2 rounded-full transition-colors ${viewMode === 'bubble' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  ○
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-blue-600">{filteredAlumni.length}</div>
            <div className="text-gray-600 text-sm">Alumni Ditampilkan</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-purple-600">{uniqueBatches.length}</div>
            <div className="text-gray-600 text-sm">Total Angkatan</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600">{new Set(alumniData.map(a => a.major)).size}</div>
            <div className="text-gray-600 text-sm">Program Studi</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600 text-sm">Kebanggaan</div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          {viewMode === 'masonry' && <MasonryLayout />}
          {viewMode === 'cards' && <CardLayout />}
          {viewMode === 'hexagon' && <HexagonLayout />}
          {viewMode === 'bubble' && <BubbleLayout />}
        </div>
      </div>
    </div>
  );
};

export default AlumniGallery;