/******************************************************************************
    Copyright (C) 2016-2019 by Streamlabs (General Workings Inc)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

******************************************************************************/

#pragma once
#include <inttypes.h>
#include "gs-limits.h"
#include "gs-vertex.h"
#include "util-memory.h"
extern "C" {
#pragma warning(push)
#pragma warning(disable : 4201)
#include <graphics/graphics.h>
#pragma warning(pop)
}

namespace GS {
class VertexBuffer {
public:
	virtual ~VertexBuffer();

	/*!
		* \brief Create a Vertex Buffer with a specific number of Vertices.
		*
		* \param maximumVertices Maximum amount of vertices to store.
		*/
	VertexBuffer(uint32_t maximumVertices);

	/*!
		* \brief Create a Vertex Buffer with the maximum number of Vertices.
		*
		* \param maximumVertices Maximum amount of vertices to store.
		*/
	VertexBuffer() : VertexBuffer(MAXIMUM_VERTICES){};

	/*!
		* \brief Create a copy of a Vertex Buffer
		* Full Description below
		*
		* \param other The Vertex Buffer to copy
		*/
	VertexBuffer(gs_vertbuffer_t *other);

	// Copy Constructor & Assignments

	/*!
		* \brief Copy Constructor
		* 
		*
		* \param other 
		*/
	VertexBuffer(VertexBuffer const &other);

	/*!
		* \brief Copy Assignment
		* Unsafe operation and as such marked as deleted.
		*
		* \param other
		*/
	void operator=(VertexBuffer const &other) = delete;

	// Move Constructor & Assignments

	/*!
		* \brief Move Constructor
		*
		*
		* \param other
		*/
	VertexBuffer(VertexBuffer const &&other);

	/*!
		* \brief Move Assignment
		*
		*
		* \param other
		*/
	void operator=(VertexBuffer const &&other);

	void Resize(uint32_t new_size);

	uint32_t Size();

	bool Empty();

	const GS::Vertex At(uint32_t idx);

	const GS::Vertex operator[](uint32_t const pos);

	void SetUVLayers(uint32_t layers);

	uint32_t GetUVLayers();

	/*!
		* \brief Directly access the positions buffer
		* Returns the internal memory that is assigned to hold all vertex positions.
		*
		* \return A <vec3*> that points at the first vertex's position.
		*/
	vec3 *GetPositions();

	/*!
		* \brief Directly access the normals buffer
		* Returns the internal memory that is assigned to hold all vertex normals.
		*
		* \return A <vec3*> that points at the first vertex's normal.
		*/
	vec3 *GetNormals();

	/*!
		* \brief Directly access the tangents buffer
		* Returns the internal memory that is assigned to hold all vertex tangents.
		*
		* \return A <vec3*> that points at the first vertex's tangent.
		*/
	vec3 *GetTangents();

	/*!
		* \brief Directly access the colors buffer
		* Returns the internal memory that is assigned to hold all vertex colors.
		*
		* \return A <uint32_t*> that points at the first vertex's color.
		*/
	uint32_t *GetColors();

	/*!
		* \brief Directly access the uv buffer
		* Returns the internal memory that is assigned to hold all vertex uvs.
		*
		* \return A <vec4*> that points at the first vertex's uv.
		*/
	vec4 *GetUVLayer(size_t idx);

	gs_vertbuffer_t *Update();

	gs_vertbuffer_t *Update(bool refreshGPU);

private:
	void SetupVertexBuffer(uint32_t maximumVertices);

private:
	uint32_t m_size;
	uint32_t m_capacity;
	uint32_t m_layers;

	// Memory Storage
	vec3 *m_positions;
	vec3 *m_normals;
	vec3 *m_tangents;
	uint32_t *m_colors;
	vec4 *m_uvs[MAXIMUM_UVW_LAYERS];

	// OBS GS Data
public:
	gs_vb_data *m_vertexbufferdata;
	gs_vertbuffer_t *m_vertexbuffer;
	gs_tvertarray *m_layerdata;
};
} // namespace GS
