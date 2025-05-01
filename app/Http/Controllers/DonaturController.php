<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donatur;
use Inertia\Inertia;

class DonaturController extends Controller
{
    public function index()
    {
        $donatur = Donatur::all();
        return Inertia::render('Donatur/DonaturList/DonaturList', [
            'donatur' => $donatur
        ]);
    }

    public function create()
    {
    return Inertia::render('Donatur/TambahDonatur/TambahDonatur');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nik' => 'required|string|max:20',
            'kategori' => 'required|string',
            'jabatan' => 'required|string',
            'alamat' => 'required|string',
            'no_telp' => 'required|string|max:15',
        ]);

        Donatur::create($validated);

        return redirect('/donatur-list')->with('success', 'Data donatur berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $donatur = Donatur::findOrFail($id);

        return Inertia::render('Donatur/EditDonatur/EditDonatur', [
            'donatur' => $donatur
        ]);
    }

    public function update(Request $request, $id)
    {
        $donatur = Donatur::findOrFail($id);

        $validated = $request->validate([
            'nama' => 'nullable|string|max:255',
            'nik' => 'nullable|string|max:20',
            'jabatan' => 'nullable|string',
            'kategori' => 'nullable|string',
            'alamat' => 'nullable|string',
            'no_telp' => 'nullable|string|max:15',
        ]);

        $donatur->update($validated);

        return redirect('/donatur-list')->with('success', 'Data donatur berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $donatur = Donatur::findOrFail($id);
        $donatur->delete();

        return redirect('/donatur-list')->with('success', 'Data donatur berhasil dihapus.');
    }
}
