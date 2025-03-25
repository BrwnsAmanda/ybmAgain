<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donatur;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class DonaturController extends Controller
{
    public function index(){
        $donatur = Donatur::all(); // Ambil semua data dari database

        return Inertia::render('PenerimaList/PenerimaList', [ // Pastikan nama view sesuai dengan file di frontend
            'donatur' => $donatur,
        ]);
    }

    public function show($id){
        $donatur = Donatur::find($id);

        return response()->json([
            'success' => true,
            'data' => $donatur
        ], 201);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'nik' => 'required|string|max:255',
            'jabatan' => 'nullable|string|max:50',
            'alamat' => 'required|string|max:255',
            'kategori' => 'required|string',
            'no_telp' => 'required|string|max:15',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->erorrs()
            ], 400);
        }

        $donatur = Donatur::create([
            'nama' => $request->nama,
            'nik' => $request->nik,
            'jabatan' => $request->jabatan,
            'alamat' => $request->alamat,
            'kategori' => $request->kategori,
            'no_telp' => $request->no_telp,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $donatur
        ], 201);
    }

    public function update($id, Request $request){
        $donatur = Donatur::find($id);

        $validator = Validator::make($request->all(), [
            'nama' => 'sometimes|string|max:255',
            'nik' => 'sometimes|string|max:255',
            'jabatan' => 'sometimes|string|max:50',
            'alamat' => 'sometimes|string|max:255',
            'kategori' => 'sometimes|string',
            'no_telp' => 'sometimes|string|max:15',
        ]);

        if($validator ->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 400);
        }

        $donatur->update($request->only([
            'nama', 'nik', 'jabatan', 'kategori', 'alamat', 'no_telp'
        ]));

        $donatur->save();

        return response()->json([
            'success' => true,
            'message' => 'Data donatur berhasil diupdate',
            'data' => $penerima
          ], 200);
    }

    public function destroy($id){
        $donatur = Donatur::find($id);

        if(!$donatur){
            return response()->json(['message' => 'Data tidak ditemukan'], 400);
        }

        $donatur -> delete();

        return response()->json([
            'message' => 'Data berhasil dihapus'
        ]);
    }
}

