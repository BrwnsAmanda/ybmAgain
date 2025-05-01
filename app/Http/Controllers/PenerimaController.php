<?php

namespace App\Http\Controllers;

use App\Models\Penerima;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PenerimaController extends Controller
{
    public function index()
    {
        $penerima = Penerima::all();
        return Inertia::render('PenerimaList/PenerimaList', [
            'penerima' => $penerima
        ]);
    }

    public function create()
    {
    return Inertia::render('TambahPenerima/TambahPenerima');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nik' => 'required|string|max:20',
            'kategori' => 'required|string',
            'alamat' => 'required|string',
            'no_telp' => 'required|string|max:15',
        ]);

        Penerima::create($validated);

        return redirect('/penerima-list')->with('success', 'Data penerima berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $penerima = Penerima::findOrFail($id);

        return Inertia::render('EditPenerima/EditPenerima', [
            'penerima' => $penerima
        ]);
    }

    public function update(Request $request, $id)
    {
        $penerima = Penerima::findOrFail($id);

        $validated = $request->validate([
            'nama' => 'nullable|string|max:255',
            'nik' => 'nullable|string|max:20',
            'kategori' => 'nullable|string',
            'alamat' => 'nullable|string',
            'no_telp' => 'nullable|string|max:15',
        ]);

        $penerima->update($validated);

        return redirect('/penerima-list')->with('success', 'Data penerima berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $penerima = Penerima::findOrFail($id);
        $penerima->delete();

        return redirect('/penerima-list')->with('success', 'Data penerima berhasil dihapus.');
    }
}
