<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penerima;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class PenerimaController extends Controller
{
    public function index() {
        $penerima = Penerima::all(); // Ambil semua data penerima dari database
    return Inertia::render('PenerimaList', ['penerimaData' => $penerima]);
    }

    /*public function index()
    {
        $penerima = Penerima::all();
        return response()->json($penerima);
    }*/

    public function show($id){
        $penerima = Penerima::find($id);

        return response()->json([
            'success' => true,
            'data' => $penerima
        ], 201);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'nik' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
            'kategori' => 'required|string',
            'no_telp' => 'required|string|max:15',
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 400);
        }

        $penerima = Penerima::create([
            'nama' => $request->nama,
            'nik' => $request->nik,
            'alamat' => $request->alamat,
            'kategori' => $request->kategori,
            'no_telp' => $request->no_telp,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data berhasil ditambahkan',
            'data' => $penerima
        ], 201);
    }


    // Memperbarui data penerima
    public function update($id, Request $request){
        $penerima = Penerima::find($id);

      $validator = Validator::make($request->all(),[
        'nama' => 'sometimes|string|max:255',
        'nik' => 'sometimes|string|max:50',
        'kategori' => 'sometimes|string',
        'alamat' => 'sometimes|string|max:255',
        'no_telp' => 'sometimes|string|max:20',
      ]);

      if($validator -> fails()){
        return response()->json([
            'success' => false,
            'message' => $validator->errors()
        ], 400);
      }

      $penerima->update($request->only([
        'nama', 'nik', 'kategori', 'alamat', 'no_telp'
      ]));

      $penerima->save();

      return response()->json([
        'success' => true,
        'message' => 'Data penerima berhasil diupdate',
        'data' => $penerima
      ], 200);
    }


    // Menghapus data penerima berdasarkan ID
    public function destroy($id){
        $penerima = Penerima::find($id);

        if(!$penerima){
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        $penerima -> delete();

        return response()->json(['message' => "Data berhasil dihapus"]);
    }
}
